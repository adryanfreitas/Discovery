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
 fetch(`${url}/1`, {
    method: "PUT",
    body: JSON.stringify(updateUser),
    headers: {
    "Content-type": "aplication/json; charset=UTF-8"
    }
 })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
  }
})
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
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

deleteUser(5)
getUsers()
getUser()