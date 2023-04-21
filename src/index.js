import './style.css';
import './styling-purpose.js'

import {setEventListener, toLocal, falseInput, listEmpty, refreshPage} from './code-reuse.js'
import {toggleClearCompleted, disableList} from './styling-purpose.js'

const input = document.querySelector('#new-item');
const form = document.querySelector('form');
const listView = document.querySelector('#todo-list');


class Mytodo {

  constructor() {
    this.list = JSON.parse(localStorage.getItem('list')) || [];
    this.checked = this.list.filter(({completed})=> completed).length;
  }

  addTodo(e) {
    e.preventDefault();
    let inputNote = input.value.trim();
    if(inputNote==false) {
      falseInput(myTodo); 
      return }
    const obj = new List(inputNote);
    myTodo.list.push(obj);
    form.reset();
    myTodo.render();
  }
  
  removeTodo(e) {
    const z =  e.target.closest('li');
    const {index} = z.dataset;
    myTodo.list.splice(index,1);
    myTodo.checked -= 1;
    myTodo.render();
  }

  editDescription(e){
    // activate edit

    const li = e.target.closest('li');
    
    console.log('this is edit ', li)
    //const newDescription;
   // console.log(li,index)
    //myTodo.list = [];

  }

  clearCompleted(e){
    
    const filtered = myTodo.list.filter(({completed})=>!completed);

    console.log('clear completed',myTodo.list, filtered);
//window.load
  }

  checkBox(){
  if(this.checked) {
    this.parentElement.parentElement.setAttribute('checked','');
    myTodo.list[this.dataset.index].completed = true;
    myTodo.checked += 1;
    
   //this line is to watch the result in console , you can remove it later	
    console.log("Refreshed, container -", container);
    //disableList(this);//.lastElementChild.lastElementChild


    if(myTodo.checked == 1) {
      // Activate Clear Completed
      toggleClearCompleted(myTodo);
     }
  }
  else {
    this.removeAttribute('checked');
    myTodo.list[this.dataset.index].completed = false;
    myTodo.checked -= 1;    
    if(myTodo.checked == 0) {
      // Deactivate clear completed
      toggleClearCompleted(myTodo);
     }
  }
  toLocal(myTodo);
  }

  render() {
    toLocal(myTodo);
    listView.innerHTML = '';
    toggleClearCompleted(myTodo);

    // If there's no value in the list
    if(myTodo.list.length === 0) {
      listEmpty();
    }
     // Render new todo list based on updated tasks array
    myTodo.list.forEach((noteObj,index) => 
   {
    const li = document.createElement('li');
    li.classList.add('navbar','navbar-brand')
    li.setAttribute('data-index',index);
    li.innerHTML = `
    <div class="form-check">
    <input class="form-check-input" type="checkbox" id="${index}" ${
      noteObj.completed ? 'checked' : ''
    } data-index=${index}>
    <label class="form-check-label" for="${index}">
     ${noteObj.description}
    </label>
    <input class="form-check-label" id="edit-input"/>
    </div>
    <div>
      <i class="bi bi-pencil"><span class="help">edit</span></i>
      <i class="bi bi-trash2"><span class="help">delete</span></i>
    </div>
    `;
    li.classList.toggle('completed', noteObj.completed);
    listView.appendChild(li);
   });

  const checked = 0;

  const checkbox = document.querySelectorAll("input[type=checkbox]");
  const editList = document.querySelectorAll('i.bi.bi-pencil')
  const trashList = document.querySelectorAll('i.bi.bi-trash2')
  const enter = document.querySelectorAll('i.bi.bi-arrow-90deg-left')
  const refresh = document.querySelectorAll('i.bi.bi-arrow-clockwise')
  const clear = document.querySelectorAll('#archive')

// set event listener on elements after creating them

setEventListener( checkbox, myTodo.checkBox, 'change')
setEventListener( trashList, myTodo.removeTodo, 'click')
setEventListener( editList, myTodo.editDescription, 'click')
setEventListener( enter, myTodo.addTodo, 'click')
setEventListener( refresh, refreshPage, 'click')
setEventListener( clear, myTodo.clearCompleted, 'click')

form.addEventListener('submit', myTodo.addTodo);
console.log('render finished -', myTodo)

  }
}

class List {
  constructor(description) {
    this.id = myTodo.list.length;
    this.description = description;
    this.completed = false;
  }
}

const myTodo = new Mytodo();

addEventListener("DOMContentLoaded", () => {
  console.log(myTodo.list)
  myTodo.render();
});
