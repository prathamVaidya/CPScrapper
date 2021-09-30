var config = {}
const HOST = "localhost" // change it to "mongo" if using docker
const USERNAME = "cpserveruser"
const PASSWORD = "passwordhere"
const DB_NAME = "cpserver"
const PORT = "27017"

//  TO convert in MongoDB String
if(USERNAME == ""){
    config.MONGODB_CONN_STRING = "mongodb://"+HOST+":"+PORT+"/"+DB_NAME
}
else if(USERNAME != "" && PASSWORD == ""){
    config.MONGODB_CONN_STRING = "mongodb://"+USERNAME+"@"+HOST+":"+PORT+"/"+DB_NAME
}
else{
    config.MONGODB_CONN_STRING = "mongodb://"+USERNAME+":"+PASSWORD+"@"+HOST+":"+PORT+"/"+DB_NAME
}

module.exports = config
