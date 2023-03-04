// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")

// Initialize express and define a port
const app = express()
const PORT = 3000

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log("Homepage accessed\n")
    res.send('Welcome to my express app !!')
  })

//webhook endpoint
app.post("/hook", (req, res) => {
  console.log(req.body) // Call your action on the request here
  console.log(`User name is ${req.body.name}\n`)
  res.status(200).end() // Responding is important
})

// Start express on the defined port
app.listen(PORT, () => console.log(`>>>>>>> Server running on port ${PORT} <<<<<<<<`))
