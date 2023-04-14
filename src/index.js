import './style.css';
import './styling-purposes.js'

const input = document.querySelector('#new-item');
const form = document.querySelector('form');
const listView = document.querySelector('#todo-list');
const newItem = document.querySelector('#new-item')

class Mytodo {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('list')) || [];
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
  }

  toLocal() {
    localStorage.setItem('list', JSON.stringify(x.list));
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
console.log(x.list)
x.render();
form.addEventListener('submit', x.addTodo);
