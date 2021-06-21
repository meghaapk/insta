const express = require ('express')
const app= express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5001
const {MONGOURI} = require('./config/keys')



mongoose.connect(MONGOURI,{
    useNewUrlParser:true, //it showed we should be adding this in warning, therefore added
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yahooo")
})
mongoose.connection.on('error',()=>{
    console.log("couldn't connect to mongo",err)
})

require('./models/user')
// mongoose.model("user")
require('./models/post')


app.use(express.json())// first this before routes
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))


if(process.env.NODE_ENV=="production"){
    app.use(exprss.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    })
}

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})