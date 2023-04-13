import './style.css';
const todo = document.querySelector('#new-item')

const con = function (b){
    console.log('running con')
console.log(b)
}

const load = ()=>{
   
        todo.addEventListener('keyup',con(todo))
    
}
window.onload(load)
