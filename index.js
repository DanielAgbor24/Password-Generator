const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("password-result1")
let passwordTwoEl = document.getElementById("password-result2")
let passwordlength = 15
let randomPassword1 = ""
let randomPassword2 = ""

function getRandomCharacter() {
    let randomChar1 = Math.floor(Math.random() * characters.length)
    return characters[randomChar1]
}

function generatePassword() {
    let randomPassword1 = ""
    let randomPassword2 = ""
    for (let i = 0; i < passwordlength; i++) {
        randomPassword1 += getRandomCharacter()
        randomPassword2 += getRandomCharacter()
    }
    passwordOneEl.textContent = randomPassword1
    passwordTwoEl.textContent = randomPassword2
}
    
    

