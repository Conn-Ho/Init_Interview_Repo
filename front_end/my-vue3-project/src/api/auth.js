import {postRequest} from "@/api/api.js";


const register=(data)=>{
    return postRequest('/register',data)
}
const login=(data)=>{
    return postRequest('/login',data)
}

export {register,login}
