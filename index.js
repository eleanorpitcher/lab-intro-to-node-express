console.log('test')

const express = require('express')
const app = express()

let roleModel = {
    name: "Michelle Obama",
    occupation: "Politician",
    languages:["English"]
  }

app.listen(5005)

app.get('/role-model', (res,req)=>{
    req.json(roleModel)
})