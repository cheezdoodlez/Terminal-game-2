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
let currentUser 
let continuePlaying = prompt('(Y/N):') 
let won = 0
let retry = false

function  checkDatabase(userEntry){
    if(usernames.includes(userEntry.toLowerCase()))  return true
    return false
    
    
    
    
    
}


do { 
let username 
if (retry) {
    username = currentUser
    } else {username = prompt('Cadet what is your name?: ');
currentUser = username    }
if(!username && retry === false){ //i added 1 guard check an example of validation of user input
    console.log('Cadet name cannot be empty')
} else if (checkDatabase(username) && retry === false) {
    console.log(`username already taken..\n\ndo you want to continue as ${currentUser} ?`)
    let willTry = prompt('(Y/N):')
    //ternary operator
    if(willTry.toLowerCase() === 'y') {
        retry = true
        } else {
        retry = false
        }
    } else {
        console.log(`Hey ${username} u are in space station named Prometheus your first mission is to go to planet c67 do you want to continue to c67 ()`)
        
    }
}while (continuePlaying)
    console.log ("This should execute")


// do {

// username = prompt('Cadet what is your name?: ');
// console.log(`Your name is ${username}`)
// // console.log(`${username} you are now in the space station.`)

// } while (username === undefined)

//     if(usernames.includes(username)) console.log('This username is already taken')
//        let option1 = prompt(`do you want to continue as ${username}(Y/N)`)

//         if(option1 === 'y' || option1 ==='Y'){
// console.log(option1)

//         } 
    




// const promptTwo = require('prompt-sync')()
// console.log
// const Party = prompt('')
// console.log(`Your party is${username}`)
// 