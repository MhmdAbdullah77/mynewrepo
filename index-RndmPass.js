const passBox = document.querySelector('#password');
const button = document.querySelector('button')
const copyPass = document.querySelector('#imgz')
const length = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789';
const symbol = '@#$%^&*()_[]=+-<>';

const allChars = upperCase + lowerCase + number + symbol;

// function copyPass(){
//     passBox.select();
//     document.execCommand('copy')
// }


function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)]
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password += number[Math.floor(Math.random()*number.length)]
    password += symbol[Math.floor(Math.random()*symbol.length)]

    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)]
    }
    passBox.value = password
}


button.addEventListener('click',function(){createPassword()})
copyPass.addEventListener('click',function(){
    copyPass();
})

