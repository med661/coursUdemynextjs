import axios from "axios";
import baseUrl from "./baseUrl";
import catchErrors from "./catchErrors";
import Router from "next/router";
import cookie from "js-cookie";
export const registerUser =async (user,profilePicUrl,setError,setLoading) =>{
    setLoading(true)
    try {
        const res=await axios.post(`${baseUrl}/api/signup`,{user,profilePicUrl})
        setToken(res.data)
        
    } catch (error) {
        const errorMsg =catchErrors(error)
        setError(errorMsg)
        
    }
    setLoading(false)


}


export const LoginUser =async (user,setError,setLoading) =>{
    setLoading(true)
    try {
        const res=await axios.post(`${baseUrl}/api/auth`,{user})
        setToken(res.data)
        
    } catch (error) {
        const errorMsg =catchErrors(error)
        setError(errorMsg)
        
    }
    setLoading(false)


}

const setToken=(token)=>{
    cookie.set("token",token)
    Router.push('/')

}