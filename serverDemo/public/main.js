// const { get } = require("http")

console.log("hello world")

const getNamesBtn = document.querySelector('#get-names')
const list = document.querySelector('ul')

const firstNameBtn = document.querySelector('#first')
const lastNameBtn = document.querySelector('#last')

const createList = (arr) => {
    list.innerHTML = ""
    arr.forEach(element => {
        let newItem = document.createElement('li')
        newItem.textContent = element
        list.appendChild(newItem)
    });
}

const getNames = () => {
    axios.get('http://localhost:4000/api/names')
    .then(response => {
        console.log(response.data)
        createList(response.data)
    })
    .catch(err =>console.log(err))
}

const getFirstOrLast = evt => {
    console.log(evt.target)
    axios.get(`http://localhost:4000/api/names/${evt.target.id}`)
    .then(response => {
        createList(response.data)
    })
    .catch(err => console.log(err))
}

getNamesBtn.addEventListener('click', getNames)
firstNameBtn.addEventListener('click', getFirstOrLast)
lastNameBtn.addEventListener('click', getFirstOrLast)