const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/:id", (req, res) => {
    console.log(req.params);
    res.send("Hello")

})
app.post("/profile", (req, res) => {

    res.send("Welcome")
})

app.listen(3001, () => {
    console.log("server is running on port 3001");

}) 

