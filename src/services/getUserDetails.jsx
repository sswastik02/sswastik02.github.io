import User from "Models/User"

const { default: axios } = require("axios")

async function getUserInfo(user){
    var userUrl = `https://api.github.com/users/${user}`
    try{
        var response = await axios.get(userUrl)
        return response.data
    }
    catch(e){
        return {}
    }
}



async function getUserDetails(username){
    var userResponse = await getUserInfo(username)
    let userDetails = new User(userResponse)
    return userDetails
}

export default getUserDetails