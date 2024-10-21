// Character selection/customization
const prompt = require('prompt-sync')()
// const username = prompt('What is your name?') //Ask user what name is
const usernames = [
    'matt',
    'ian',
    'asti',
    'keith',
    'afira',

    'abdullah',
    'adam',
    'amadou',
    'angel',
    'blake',
    'bradley',
    'brian',
    'britt',
    'christopher',
    'claire',
    'cora',
    'david',
    'fiona',
    'jen',
    'joshua',
    'justin',
    'kayla',
    'keith',
    'kevin',
    'leah',
    'michael',
    'miles',
    'nathaniel',
    'nilofar',
    'somayeh',
    'sophie',
    'sufian',
    'taihlor',
    'tashoi',
    'toni',
    'zaki',
    'jonas',
]
let username 
do {

username = prompt('Cadet what is your name?: ');
console.log(`Your name is ${username}`)
// console.log(`${username} you are now in the space station.`)

} while (username === undefined)

    if(usernames.includes(username)) console.log('This username is already taken')
       let option1 = prompt(`do you want to continue as ${username}(Y/N)`)

        if(option1 === 'y' || option1 ==='Y'){
console.log(option1)
        } 
    




// const promptTwo = require('prompt-sync')()
// console.log
// const Party = prompt('')
// console.log(`Your party is${username}`)
// 