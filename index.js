const connectTOMongo = require('./db')
const express = require('express')
var cors = require('cors')

connectTOMongo()
const app = express()
const port = 5000
app.use(cors())

app.use(express.json())

//rotes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    // console.log(`Example app listening at http://localhost:${port}`)
    console.log("why are you seeking in console")
})
