import { getUserData } from "../util.js"

export const userAuth = (ctx,next)=>{
    ctx.user = getUserData()
    next()
}