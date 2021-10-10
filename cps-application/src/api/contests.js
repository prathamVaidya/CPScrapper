import client from "./client";

const endpoint = '/contests'
    
const getContests = () => {
   
client.get(endpoint)

}


export default {
    getContests
}