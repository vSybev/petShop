import {html,nothing} from "../../node_modules/lit-html/lit-html.js"
import { getOne, getUserDonations, makeDonation, petDonations } from "../api/data.js"
import { createSubmitHandler } from "../util.js"


const creatorTemplate = (id,ctx) => html`
                        <!-- Only for registered user and creator of the pets-->
                        <a href="/edit/${id}" class="edit">Edit</a>
                        <a href="/delete/${id}" class="remove">Delete</a>
                   
                    
`
const noCreatorAndUserTemplate = (id,ctx) => html`
                        <!--(Bonus Part) Only for no creator and user-->
                        <a href="" class="donate" @click=${()=> donation(id,ctx)}>Donate</a>
`

const detailsTemplate = ( data,userId, ctx,donationData, isDonated) =>html`
     <!--Details Page-->
     <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src="${data.image}">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${data.name}</h1>
                        <h3>Breed: ${data.breed}</h3>
                        <h4>Age: ${data.age}</h4>
                        <h4>Weight: ${data.weight}</h4>
                        <h4 class="donation">Donation: ${donationData * 100}$</h4>
                    </div>
                    <div class="actionBtn">
                            ${data._ownerId == userId ? creatorTemplate(data._id,ctx) : nothing}
                            ${data._ownerId != userId && userId && isDonated == 0? noCreatorAndUserTemplate(data._id, ctx) : nothing}
                    </div>
                </div>
            </div>
        </section>
`

export const detailsView = async(ctx)=>{
    const data = await getOne(ctx.params.id)
    const donationData = await petDonations(ctx.params.id)
    console.log(donationData);
    let userId  = ctx.user
    let isDonated
    if(userId){
        userId = userId._id
        isDonated = await getUserDonations(ctx.params.id, userId)
    }
    console.log(isDonated);
    ctx.render(detailsTemplate(data, userId, ctx,donationData, isDonated))
}

async function donation(id){
    console.log(id);
    await makeDonation({petId: id})

}