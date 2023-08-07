
import * as api from "./api.js"

const endpoints = {
    getAll: "/data/pets?sortBy=_createdOn%20desc&distinct=name",
    create: "/data/pets",
    getOne: "/data/pets/",
    delete: "/data/pets/",
    edit: "/data/pets/",
    // Addons
    makeDonation: "/data/donation",
    
}

export async function getAll(){
    return api.get(endpoints.getAll)
}
export async function create(data){
    return api.post(endpoints.create, data)
}
export async function getOne(id){
    return api.get(endpoints.getOne + id)
}
export async function del(id){
    return api.del(endpoints.delete + id)
}
export async function edit(id,data){
    return api.put(endpoints.edit+ id, data)
}
// Addons
export async function makeDonation(data){
    
    return api.post(endpoints.makeDonation, data)
}
export async function petDonations(id){
    return api.get(`/data/donation?where=petId%3D%22${id}%22&distinct=_ownerId&count`)
}
export async function getUserDonations(petId, userId){
    return api.get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}