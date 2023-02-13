const express = require('express') 
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

let namesArr = [
    {
        firstName: 'Carl',
        lastName: 'Work',

    },
    {
        firstName: 'Lukus',
        lastName: 'Nesittka',
    },
    {
        firstName: 'Parker',
        lastName: 'Sheehan'
    }
]

app.get('/api/names', (req,res) => {
    let fullNamesArr = namesArr.map(namesObj => {
        return `${namesObj.firstName} ${namesObj.lastName}`
    })
    res.status(200).send(fullNamesArr)
})

app.listen(4000, console.log(`App running on port 4000!`))

app.get('/api/names/:type', (req,res) => {
    console.log(req.params)
    let { type } = req.params
    let newNameArr = namesArr.map(namesObj => {
        if(type === 'first'){
            return namesObj.firstName
        } else {
            return namesObj.lastName
        }
    })
    console.log(newNameArr)
    res.status(200).send(newNameArr)
})
