const { default: axios } = require("axios")


async function getUserRepoDetails(reposUrl){
    try{
    var response = await axios.get(reposUrl)
    return response.data
    }
    catch (e) {
        return {}
    }
    
}

export default getUserRepoDetails