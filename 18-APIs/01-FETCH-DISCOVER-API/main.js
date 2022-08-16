const url = "https://localhost:5500/api"

function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent =
    JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser() {
    fetch(`${url}/1`)
     .then(response => response.json())
     .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
     })
     .catch(error => console.error(error))
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        Headers: {
          "Content-type": "application/json; charset=UTF-8" 
        }
    })
     .then(response => response.json())
     .then(data => alertApi.textContent = data)
     .catch(error => console.error(error))
}

function updateUser() {
fetch(`url4`)
}

const newUser = {
    name: "Olivia Zars",
    avatar: "https://picsum.photos/200/300",
    city: "Rio do sul"
}
// addUser(newUser) 

const updateUser = {
    name: "Marcelo Clovis",
    avatar: "https://picsum.photos/200/300",
    city: "Recife"
}

getUsers()
getUser()