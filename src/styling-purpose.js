const input = document.querySelector('#new-item')
const clear = document.querySelector('#archive')

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


export function toggleClearCompleted(the_list){
    let complete = the_list.checked !== 0;
    if(complete)
      clear.classList.toggle('disabled', false);
    else
      clear.classList.toggle('disabled', true);

    console.log('this is toggleClearCompleted - ', the_list, clear)
}

export function disableList(checkbox){
    const li = checkbox.closest('li')
    li.classList.toggle('completed', true)
    console.log('disableList',li)
    console.log(li)
}