import './style.css';
import './styling-purpose.js'

import {setEventListener, falseInput, listEmpty} from './code-reuse.js'

const input = document.querySelector('#new-item');
const form = document.querySelector('form');
const listView = document.querySelector('#todo-list');


class Mytodo {

  constructor() {
    this.list = JSON.parse(localStorage.getItem('list')) || [];
    this.checked = 0;
  }

  toLocal() {
    localStorage.setItem('list', JSON.stringify(myTodo.list));
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
    console.log('Last added object', myTodo.list[myTodo.list.length-1])
    myTodo.render();
  }
  
  removeTodo(e) {
    const z =  e.target.closest('li');
    const {index} = z.dataset;
    myTodo.list.splice(index,1);
    myTodo.render();
  }

  refreshPage(e){
    location.reload();
    //console.log(e.type, 'ed refresh right now ', e.target);
  }

  editDescription(e){
    // activate edit

    const li = e.target.closest('li');
    const editLable = li.querySelector('.form-check-label')
    const editInput = li.querySelector('#edit-input')

    editable.setAttribute('contentEditable', true);
    editLable.style.display = 'none'
    editable.style.display = 'inline-block'
    editable
    console.log(editable, editLable)
    //const newDescription;
   // console.log(li,index)
    //myTodo.list = [];

  }

  clearCompleted(e){
    console.log(e.type, 'clear right now ', e.target);

    //window.load
  }

  checkBox(){
  if(this.checked) {
    if(myTodo.checked == 0) {
      document.querySelector('#archive').classList.remove('disabled');
      console.log('this is first checkbox ON- ',myTodo, document.querySelector('#archive'));
     }
    this.setAttribute('checked','')
    myTodo.checked += 1;
    console.log('this is checkbox ON- ',myTodo);
  }
  else {
    if(myTodo.checked == 1) {
      document.querySelector('#archive').classList.add('disabled');
      console.log('this is last checkbox OFF- ', myTodo, document.querySelector('#archive'));
     }
    this.removeAttribute('checked');
    myTodo.checked -= 1;    
    console.log('this is checkbox OFF- ',myTodo);
  }

  
  
  }

  render() {
    myTodo.toLocal();
    listView.innerHTML = '';

    // If there's no value in the list
    if(myTodo.list.length === 0) listEmpty();

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
setEventListener( refresh, myTodo.refreshPage, 'click')
setEventListener( clear, myTodo.clearCompleted, 'click')

form.addEventListener('submit', myTodo.addTodo);
console.log('remder finished -', myTodo.list)

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

window.onload = function(){
console.log(myTodo.list)
myTodo.render();
}
