import {render,html} from "../../node_modules/lit-html/lit-html.js"
import { navbarView } from "../views/navbarView.js"


const root = document.querySelector("#root")

const ctxRender = (ctx,templateResult) => render(layoutTemplate(ctx,templateResult),root)

const layoutTemplate = (ctx, content) => html`
    ${navbarView(ctx)}
    <main id="content">
        ${content}
    </main>
        <!-- Footer  -->
        <footer>Pet Care 2022©</footer>
`

export const renderMiddleware = (ctx,next)=>{

    ctx.render = ctxRender.bind({}, ctx)
    next()
}