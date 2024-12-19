
// build a password generator
//  ask from user how many character password he wants
let passwordInput = document.querySelector("#password")
const num = + prompt("how many character password do you want ?");

const letters = ["a" , "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "@", "#", "$", "%", "^", "&", "(", ")" ,"_", "A", "B", "C", "D", "E", "F", "G", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let password = "";
for(var i = 0; i < num; i++){
    // console.log(num[i])
    let random = Math.floor(Math.random() * letters.length ) 
    // console.log(random)
    password += letters[random];
}

passwordInput.value = password
console.log(password.length)