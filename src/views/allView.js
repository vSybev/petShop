import {html,nothing} from "../../node_modules/lit-html/lit-html.js"
import { getAll } from "../api/data.js"

const getOneTemplate = (data) => html`
   <div class="animals-board">
                    <article class="service-img">
                        <img class="animal-image-cover" src="${data.image}">
                    </article>
                    <h2 class="name">${data.name}</h2>
                    <h3 class="breed">${data.breed}</h3>
                    <div class="action">
                        <a class="btn" href="/details/${data._id}">Details</a>
                    </div>
                </div>
`
const notFoundTemplate = () => html`
			   <div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>
`
const getAllData = (data) => html`
        <!--Dashboard-->
        <section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
                ${data.length > 0 ? data.map(l=> getOneTemplate(l)) : notFoundTemplate()} 
            </div>
        </section>

`

export const allView = async (ctx) =>{
    const games = await getAll()
    console.log(games);
    ctx.render(getAllData(games))
}