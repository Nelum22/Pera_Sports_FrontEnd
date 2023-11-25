import axios from "axios"

export const signin = async(data) => {
    const url = "http://localhost:8080/pera-sport/auth/login"
    try{
        const res = await axios.post(url, data)
        const resData = res.data
        return resData
    }
    catch(error){
        console.log("Error fetching teams:", error)
        throw error
    }
}