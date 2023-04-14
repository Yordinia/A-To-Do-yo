import './style.css';
import './styling-purposes.js'

const input = document.querySelector('#new-item');
const form = document.querySelector('form');
const listView = document.querySelector('#todo-list');


class Mytodo {

  constructor() {
    this.list = JSON.parse(localStorage.getItem('list')) || [];
  }

  toLocal() {
    localStorage.setItem('list', JSON.stringify(x.list));
  }

  setEventListener( list, theFunction) {
    for(let i=0; i<list.length; i++){
      list[i].addEventListener('click', theFunction)
    }
  }

  addTodo(e) {
    
    // console.log('hello', input, input.value, input.value.trim())
    e.preventDefault();
    const obj = new List(input.value.trim());
    x.list.push(obj);
    form.reset();
    console.log(x.list[x.list.length-1])
    x.render();
  }

  render() {
    x.toLocal();
    listView.innerHTML = '';
     // Render new todo list based on updated tasks array
    x.list.forEach((noteObj,index) => {
    const li = document.createElement('li');
    li.classList.add('navbar','navbar-brand')
    li.innerHTML = `
    <div class="form-check">
    <input class="form-check-input" type="checkbox" id="${index}" ${
        noteObj.completed ? 'checked' : ''
      } data-index="${index}">
    <label class="form-check-label" for="${index}">
     ${noteObj.description}
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

  x.setEventListener( trashList, x.removeTodo)
  x.setEventListener( editList, x.editDescription)
  x.setEventListener( enter, x.addTodo)
  x.setEventListener( refresh, x.refreshPage)
  x.setEventListener( clear, x.clearCompleted)

  form.addEventListener('submit', x.addTodo);
  }
  
  removeTodo(e) {
    const trash = e.target;
    let listIndex = -1;
    const findIndex = function() {
      document.querySelectorAll('i.bi.bi-trash2').forEach((m, index) =>{
        if(m===trash){
          listIndex = index;          
        }
        if(listIndex!== -1) return;
      })
    }
    findIndex();
    x.list.splice(listIndex,1)
    x.render();
  }

  editDescription(e){
    console.log(e.type, 'ed edit right now ', e.target);

  }

  refreshPage(e){
    console.log(e.type, 'ed refresh right now ', e.target);
  }

  clearCompleted(e){
    console.log(e.type, 'ed clear right now ', e.target);
  }
}

class List {
  constructor(description) {
    this.id = x.list.length;
    this.description = description;
    this.completed = false;
  }
}

const x = new Mytodo();

window.onload = function(){
console.log(x.list)
x.render();
}
