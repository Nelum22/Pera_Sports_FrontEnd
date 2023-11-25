import axios from "axios"

export const getPlayers = async(team) => {
    const url = `http://localhost:8080/pera-sport/player/get-players-according-to-team?teamName=${team}`

    try{
        const res = await axios.post(url)
        const data = res.data
        return data
    }
    catch(error){
        console.log("Error fetching teams:", error)
        throw error
    }
}

export const addPlayer = async(data) => {
    const url = "http://localhost:8080/pera-sport/player/add"

    try{
        const res = await axios.post(url, data)
        alert (res.data.responseMessage)
    }
    catch(error){
        console.log("Error posting team:", error)
        throw error
    }
}

export const editPlayer = async(data) => {

    const url = "http://localhost:8080/pera-sport/player/edit"

    try{
        const res = await axios.post(url, data)
        alert (res.data.responseMessage)
    }
    catch(error){
        console.log("Error posting team:", error)
        throw error
    }
}