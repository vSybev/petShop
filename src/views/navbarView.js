import {html} from "../../node_modules/lit-html/lit-html.js"

const userTemplate = (user) => html`
                   <!--Only Users-->
                   <li><a href="/create">Create Postcard</a></li>
                <li><a href="/logout">Logout</a></li>
`
const guestTemplate = () => html`
 <!--Only Guest-->
 <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
`
const navbarTemplate = (user) => html`
 <header>
        <nav>
            <section class="logo">
                <img src="../../images/logo.png" alt="logo">
            </section>
            <ul>
                <!--Users and Guest-->
                <li><a href="/">Home</a></li>
                <li><a href="/showAll">Dashboard</a></li>
            ${user ? userTemplate(user) : guestTemplate()}

            </ul>
        </nav>
    </header>


`
export const navbarView = (ctx) =>{

    return navbarTemplate(ctx.user)
}