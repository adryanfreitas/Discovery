// fetch('https://api.github.com/users/maykbrito')
// .then( response => response.json())
// .then( data => fetch(data.repos_url))
// .then( res => res.json())
// .then( d => console.log(d))
// .catch( err => console.log(err))

// ------------------------------------------------//------------------------------------------------

// async function start() {
//     const response = await fetch('https://api.github.com/users/maykbrito')
//     const user = await response.json()
//     const reposResponse = await fetch(user.repos_url)
//     const repos = await reposResponse.json()
//     console.log(repos)
// }

// start()

// ------------------------------------------------//------------------------------------------------

// async function start() {
//     try {
//     const response = await fetch('https://api.github.com/users/maykbrito');
//     const user = await response.json();
//     const reposResponse = await fetch(user.repos_url);
//     const repos = await reposResponse.json();
//     console.log(repos);
//     } catch (e) {
//         console.log(e);
//     }
// }

// start().catch(e => console.log(e))

// start()

// ------------------------------------------------//------------------------------------------------

async function start() {
    const url = "https://api.github.com/users/maykbrito";
    const user = await fetch(url).then( r => r.json());
    const userRepos = await fetch(user.repos_url).then(r => r.json());
    console.log(userRepos)
}

start().catch(e => console.log(e)) 
