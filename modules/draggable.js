// let dragged;
// let id;
// let index;

import { updateId } from "./code-reuse";
import myTodo from "../src/index.js"
import { showDraggable } from "./styling-purpose";


let beingDragged;
let beingDraggedId;
let droppedOver;
let droppedOverId;
const lis = document.querySelectorAll('li');

function toggleDrag(){
   let isDragOn;
    if(myTodo.draggable){
      isDragOn = false;
      localStorage.setItem('draggable', false)
      myTodo.draggable = false;
    }
    else {
      isDragOn = true;
      localStorage.setItem('draggable', true)
      myTodo.draggable = true;
    }
    return isDragOn
}

export function draggableTrue (e){

    const isDragOn = toggleDrag();
    showDraggable(isDragOn);
    if(isDragOn){
        lis.forEach(li=>{
            li.setAttribute('draggable', true);
            li.style.cursor = "move";
        })
        document.ondragstart = dragStart; 
        document.ondragover = (event) => {
          event.preventDefault();
        }; 
        document.ondrop = dragEnd;
        console.log('draggble set to true' )
    }
  else{
    lis.forEach(li=>{
        li.removeAttribute('draggable');
        li.style.cursor = "pointer";
    })
  }
  
}

function dragStart ({target:li}){
  beingDragged = li;
  beingDraggedId = li.getAttribute('data-index')*1;
}

const dragEnd = ({target}) => {
  droppedOver = target.closest('li');
  droppedOverId = droppedOver.getAttribute('data-index')*1;
  finilizeDrag();
};

function finilizeDrag() {
  let fromLocal = JSON.parse(localStorage.getItem('list'));
  let a = fromLocal[beingDraggedId];
  let b = fromLocal[droppedOverId];
  //using map
  let list = fromLocal.map((obj,i)=>{
        if(i === beingDraggedId) return b;
        if(i === droppedOverId) return a;
        return obj;
    })
  updateId(list);
  myTodo.render();
}
