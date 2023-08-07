import { clearUserData, getAccessToken } from "../util.js"

const host = "http://localhost:3030"

async function request(method, url, data){
        // check user token
        const options = {
            method,
            headers: {}
        }
        // set header
        const token = getAccessToken()
        if(token){
            options.headers["X-Authorization"] = token
        }
        // create body
        if(data){
            options.headers["Content-Type"] = "application/json"
           options.body = JSON.stringify(data) 
        }
        // fetch
        try{
            
            const response = await fetch(host + url, options)
            if(response.ok != true){
                // 403 400
                if(response.status == 400 || response.status == 403){
                    clearUserData()
                }
                const error = await response.json()
                throw new Error(error.message)
            }
            if(response.status == 204){
                return response
            }else{
                return response.json()
            }

        }catch(e){
            alert(e.message)
            throw e
        }
        // check result
        // parse json
        // return result
        
        // error handling if something went wrong
        // -- invlid token (status 403)
        // -- empty response (status 204)
        // -- alert the user in other cases
}

export const get = request.bind(null, "get")
export const post = request.bind(null, "post")
export const put = request.bind(null, "put")
export const del = request.bind(null, "delete")
