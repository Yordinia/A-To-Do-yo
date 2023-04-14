const input = document.querySelector('#new-item')
const form = document.querySelector('form')
const classOns = ['mouseover','focus', 'keyup'];
const classOffs = ['mouseout','blur'];

var hover = false;

function classOn(e){
   input.classList.toggle('on-hover', true)
   if(e.type==='mouseover') hover= true;
}

function classOff(e){
    if(e.type === 'mouseout'){
        let flag = false;
       if(hover===false || e.target.value !== '') flag = true;
    // if(e.target.value === '' && document.hasFocus(e.target)=== true) flag = true;
       if(flag) return
    }
    input.classList.toggle('on-hover', false);
}

function hideCursor(e){
    e.target.style.cursor = 'none';
    hover = true;
}

classOns.forEach(event =>
    input.addEventListener(event, classOn))
classOffs.forEach( event => 
    input.addEventListener(event, classOff))
    
input.addEventListener('keyup', hideCursor);