import { del } from "../api/data.js"


export const deleteView = async (ctx)=>{
    const id = ctx.params.id
    await del(id)
    ctx.page.redirect("/")
}