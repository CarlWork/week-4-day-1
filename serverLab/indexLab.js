const express = require('express')

const app = express()

app.use(express.json())

app.get('/api/users',(req,res) => {
    let friends = ["Kaleb", "Damian", "Nick", "Lukus", "Parker"]
    res.status(200).send(friends)
})


app.get('/weather/:temperature', (req,res) => {
    console.log(req.params)
    let { temperature } = req.params
    const temp = `<h3>It was ${temperature} degrees today</h3>`
    res.status(200).send(temp)
})


app.listen(4000, console.log('listening to requests on 4000'))

