const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended: true})) // Allows us to parse HTML body.

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
  var num1 = parseInt(req.body.num1); // Take data with request.
  var num2 = parseInt(req.body.num2);
  var result = num1+num2;
  res.send("Sum is : " + result) // Send data to user with response.
}) // To handle a post request from the user.

app.listen(3000, () => {
	console.log("Server is running.")
})