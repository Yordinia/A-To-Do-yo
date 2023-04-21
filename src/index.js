import './style.css';
import './styling-purpose.js'

import {setEventListener, toLocal, falseInput, listEmpty, refreshPage, updateId} from './code-reuse.js'
import {toggleClearCompleted, toggleCheckedList} from './styling-purpose.js'

const input = document.querySelector('#new-item');
const form = document.querySelector('form');
const listView = document.querySelector('#todo-list');


class MyTodo {

  constructor() {
    this.list = JSON.parse(localStorage.getItem('list')) || [];
    this.checked = this.list.filter(({completed})=> completed).length;
  }

  addTodo(e) {
    e.preventDefault();
    let inputNote = input.value.trim();
    if(inputNote.length == false) {
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
    updateId(myTodo.list);
    if(z.classList.contains('checked')){
       myTodo.checked -= 1;
    }
    myTodo.render();
  }

  editDescription(){
    // activate edit
    const li = this.closest('li');
    const pastDescription = li.querySelector('label');
    const inputElem = li.querySelector('#edit-input');

    inputElem.value = pastDescription.innerText;
    
    pastDescription.classList.add('dispaly-none');
    inputElem.classList.remove('dispaly-none');

    descriptionElem.focus();

    inputElem.addEventListener('blur', () => {
      task.description = inputElem.value;
      descriptionElem.innerText = inputElem.value;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    // descriptionElem.innerText = '';
    // descriptionElem.appendChild(inputElem);
    // inputElem.focus();

    // const input = li.firstElementChild.lastElementChild;
    // input.setAttribute('contenteditable',true)
    // li.removeEventListener('click', myTodo.editDescription)
    // input.focus()
    // var range = input.createTextRange();
    // input.collapse(false);
    // input.select();
    
    console.log('this is edit ', pastDescription, descriptionElem);
    //const newDescription;
   // console.log(li,index)
    //myTodo.list = [];

  }

  clearCompleted(e){
    myTodo.list =  myTodo.list.filter(({completed})=>!completed);
    updateId(myTodo.list)
    myTodo.render();
  }

  checkBox(){
    const li = this.parentElement.parentElement;
    toggleCheckedList(li, this.checked);

  if(this.checked) {
    myTodo.list[this.dataset.index].completed = true;
    myTodo.checked += 1;

    if(myTodo.checked == 1) {
      // Activate Clear Completed
      toggleClearCompleted(myTodo);
     }

     console.log('checkbox ON -', myTodo);

  }
  else {
    myTodo.list[this.dataset.index].completed = false;
    myTodo.checked -= 1; 
       
    if(myTodo.checked == 0) {
      // Deactivate clear completed
      toggleClearCompleted(myTodo);
     }

     console.log('checkbox OFF -', myTodo);

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
    li.classList.add('navbar','navbar-brand');
    li.setAttribute('data-index',index);
    li.innerHTML = `
    <div class="form-check">
    <input class="form-check-input" type="checkbox" id="${index}" ${
      noteObj.completed ? 'checked' : ''
    } data-index=${index}>
    <label class="form-check-label" for="${index}">
     ${noteObj.description}
    </label>
    <input class='form-check-label dispaly-none' id='edit-input'>
    </div>
    <div class='icons'>
      <i class="bi bi-pencil"><span class="help">edit</span></i>
      <i class="bi bi-trash2"><span class="help">delete</span></i>
    </div>
    `;
    listView.appendChild(li);
    toggleCheckedList(li, noteObj.completed);
   });

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
console.log('render finished -', myTodo);
  }
}

class List {
  constructor(description) {
    this.id = myTodo.list.length;
    this.description = description;
    this.completed = false;
  }
}

const myTodo = new MyTodo();

addEventListener("DOMContentLoaded", () => {
  console.log(myTodo.list)
  myTodo.render();
});
