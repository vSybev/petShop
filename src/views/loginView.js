import {html} from "../../node_modules/lit-html/lit-html.js"
import { login } from "../api/user.js"
import { createSubmitHandler } from "../util.js"

const loginTemplate = (onSubmit) => html`
        <!--Login Page-->
        <section id="loginPage">
            <form class="loginForm" @submit=${onSubmit}>
                <img src="./images/logo.png" alt="logo" />
                <h2>Login</h2>

                <div>
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
                </div>

                <div>
                    <label for="password">Password:</label>
                    <input id="password" name="password" type="password" placeholder="********" value="">
                </div>

                <button class="btn" type="submit">Login</button>

                <p class="field">
                    <span>If you don't have profile click <a href="#">here</a></span>
                </p>
            </form>
        </section>

`

export const loginView = (ctx) =>{
    ctx.render(loginTemplate(createSubmitHandler(ctx, onSubmit)))
}

async function onSubmit(ctx, data, event){
    if(!data.email || !data.password ){
        return alert("All field must be filled!")
    }
    await login(data.email, data.password)
    ctx.page.redirect("/")
}