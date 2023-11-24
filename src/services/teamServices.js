import axios from "axios"

export const getAllTeams = async(teamName) => {

    const url = `http://localhost:8080/pera-sport/team/get-teams?teamName=${teamName}`
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

export const addTeam = async(data) => {
    const url = "http://localhost:8080/pera-sport/team/add"

    try{
        const res = await axios.post(url, data)
        alert (res.data.responseMessage)
    }
    catch(error){
        console.log("Error posting team:", error)
        throw error
    }
}

export const deleteTeam = async(id) => {
    const url = `http://localhost:8080/pera-sport/team/delete?teamId=${id}`

    try{
        const res = await axios.delete(url)
        alert (res.data.responseMessage)
    }
    catch(error){
        console.log("Error posting team:", error)
        throw error
    }
}

export const updateTeam = async(data) => {
    const url = "http://localhost:8080/pera-sport/team/update"

    try{
        const res = await axios.post(url, data)
        alert (res.data.responseMessage)
    }
    catch(error){
        console.log("Error posting team:", error)
        throw error
    }
}