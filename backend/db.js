const mongoose = require("mongoose")
// const url="mongodb+srv://stackoverflow:vipulstack@cluster0.8u2elln.mongodb.net/stackoverflow?retryWrites=true&w=majority"

const url = `mongodb://${process.env.DB}`

module.exports.connect = () => {
    mongoose.connect(url)
        .then((res) => console.log("Mongo db is connected successfully"))
        .catch((err) => console.log("Error : ", err))
}

// module.exports=connect