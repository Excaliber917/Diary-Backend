const mongoose =  require('mongoose')
const mongoURI = "mongodb://localhost:27017/notebook"


const connectTOMongo = ()=>
{
    mongoose.connect(mongoURI,()=>{
        console.log("connet to mongo")
    })
}

module.exports = connectTOMongo