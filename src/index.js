import './style.css';
import './styling-purposes.js'

import {falseInput, listEmpty} from './code-reuse.js'

const input = document.querySelector('#new-item');
const form = document.querySelector('form');
const listView = document.querySelector('#todo-list');


class Mytodo {

  constructor() {
    this.list = JSON.parse(localStorage.getItem('list')) || [];
  }

  toLocal() {
    localStorage.setItem('list', JSON.stringify(myTodo.list));
  }

  setEventListener( list, theFunction) {
    for(let i=0; i<list.length; i++){
      list[i].addEventListener('click', theFunction)
    }
  }

  addTodo(e) {
    // console.log('input -', input, input.value, input.value.trim())
    e.preventDefault();
    let inputNote = input.value.trim();
    if(inputNote==false) return falseInput();
    const obj = new List(inputNote);
    myTodo.list.push(obj);
    form.reset();
    console.log('Last added object', myTodo.list[myTodo.list.length-1])
    myTodo.render();
  }

  render() {
    myTodo.toLocal();
    listView.innerHTML = '';

    // If there's no value in the list
    if(myTodo.list.length === 0) listEmpty();

     // Render new todo list based on updated tasks array
    myTodo.list.forEach((noteObj,index) => {
    const li = document.createElement('li');
    li.classList.add('navbar','navbar-brand')
    li.setAttribute('data-index',index);
    li.innerHTML = `
    <div class="form-check">
    <input class="form-check-input" type="checkbox" id="${index}" ${
        noteObj.completed ? 'checked' : ''
      } data-index="${index}">
    <label class="form-check-label" for="${index}">
     ${noteObj.description}
     <input class="form-check-label setVisibilityHidden" id="edit-input"/>
    </label>
    </div>
    <div>
      <i class="bi bi-pencil"><span class="help">edit</span></i>
      <i class="bi bi-trash2"><span class="help">delete</span></i>
    </div>
    `;
    li.classList.toggle('completed', noteObj.completed);
    listView.appendChild(li);
  });

  const editList = document.querySelectorAll('i.bi.bi-pencil')
  const trashList = document.querySelectorAll('i.bi.bi-trash2')
  const enter = document.querySelectorAll('i.bi.bi-arrow-90deg-left')
  const refresh = document.querySelectorAll('i.bi.bi-arrow-clockwise')
  const clear = document.querySelectorAll('#archive')

// set event listener on elements after creating them

myTodo.setEventListener( trashList, myTodo.removeTodo)
myTodo.setEventListener( editList, myTodo.editDescription)
myTodo.setEventListener( enter, myTodo.addTodo)
myTodo.setEventListener( refresh, myTodo.refreshPage)
myTodo.setEventListener( clear, myTodo.clearCompleted)

  form.addEventListener('submit', myTodo.addTodo);
  }
  
  removeTodo(e) {
    const li = e.target.closest('li');
    const listIndex = li.dataSet.index;
    myTodo.list.splice(listIndex,1);
    myTodo.render();
  }

  refreshPage(e){
    location.reload();
    //console.log(e.type, 'ed refresh right now ', e.target);
  }

  editDescription(e){
    //console.log(e.type, 'ed edit right now ', e.target);
    const li = e.target.closest('li');
  
  const startEdit = function() {

  }

    const newDescription = li.find; 
    console.log(li,index)
    //myTodo.list = [];

  }

  

  clearCompleted(e){
    //console.log(e.type, 'ed clear right now ', e.target);
    window.loead
  }
}

class List {
  constructor(description) {
    this.id = myTodo.list.length + 1;
    this.description = description;
    this.completed = false;
  }
}

const myTodo = new Mytodo();

window.onload = function(){
console.log(myTodo.list)
myTodo.render();
}
