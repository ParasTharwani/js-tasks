
let inputSlider = document.getElementById("slider");
let sliderVal = document.getElementById("slider-value");
let pswdBox = document.getElementById("pswdbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let characters = document.getElementById("characters");
let mainBtn = document.getElementById("btn-main");
let copybtn = document.getElementById("copy-icon");


sliderVal.textContent = inputSlider.value; 

inputSlider.addEventListener('input', () => {
    sliderVal.textContent = inputSlider.value;
})
mainBtn.addEventListener('click', () => {
    pswdBox.value = generatePassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*()_-"
function generatePassword() {

    let genpswd = "";
    let allChars = "";

   if(lowercase.checked) {
    allChars += lowerChars;
   }
   else {
    allChars += "";
   }
     if (uppercase.checked) {
    allChars += upperChars;
   }
   else {
    allChars += "";
   }
    if (numbers.checked ) {
    allChars += allNumbers;
   }
   else {
    allChars += "";
   }
     if (characters.checked) {
    allChars += allSymbols
   }
   else {
    allChars += "";
   }

   if (allChars == "" || allChars.length == 0){
    return genpswd;
   }
   let i = 1;
   while(i<=inputSlider.value) {
    genpswd += allChars.charAt(Math.floor(Math.random() * allChars.length))
    i++;
   }
    return genpswd;
}
copybtn.addEventListener('click', ()=>{
    if(pswdBox.value != "") {
        navigator.clipboard.writeText(pswdBox.value)
        copybtn.title = "Password Copied"
    }
})