import './style.css';
const input = document.querySelector('#new-item')
const form = document.querySelector('#form')


const con = function (b){
    form.preventDefault;
    console.log('just ran con function')
console.log(b.value)
}


form.addEventListener('submit',con(input))    

