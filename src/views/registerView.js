import {html} from "../../node_modules/lit-html/lit-html.js"
import { register } from "../api/user.js"
import { createSubmitHandler } from "../util.js"

const registerTemplate = (onSubmit) => html`
             <!--Register Page-->
             <section id="registerPage">
            <form class="registerForm" @submit=${onSubmit}>
                <img src="./images/logo.png" alt="logo" />
                <h2>Register</h2>
                <div class="on-dark">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div class="on-dark">
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <div class="on-dark">
                    <label for="repeatPassword">Repeat Password:</label>
                    <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Register</button>

                <p class="field">
                    <span>If you have profile click <a href="#">here</a></span>
                </p>
            </form>
        </section>
`

export const registerView = (ctx) =>{
    ctx.render(registerTemplate(createSubmitHandler(ctx,onSubmit)))
}
async function onSubmit(ctx, data, event){
    console.log(data);
    for(let input in data){
        if(!data[input] ){
            return alert("All fields must be filled!")
        }
    }
    if(data.password != data["repeatPassword"]){
        return alert("Password are not same!")
    }
  
    await register(data)
    ctx.page.redirect("/")
}