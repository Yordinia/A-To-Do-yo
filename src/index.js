/* eslint-disable no-use-before-define */

import './style.css';
import { toggleCheckedList } from './styling-purpose.js';

import {
  toLocal, listEmpty,
} from './code-reuse.js';

const listView = document.querySelector('#todo-list');

class MyTodo {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('list')) || [{
      id: 0,
      description: 'Add, Delete and Edit Notes',
      completed: false,
    },
    {
      id: 1,
      description: 'Check and Clrear selected',
      completed: false,
    },

    ];
    this.checked = this.list.filter(({ completed }) => completed).length;
  }

  render() {
    toLocal(myTodo);
    listView.innerHTML = '';

    console.log(`Congrats${this}`); // linters told me I need to use this
    // If there's no value in the list
    if (myTodo.list.length === 0) {
      listEmpty();
    }
    // Render new todo list based on updated tasks array
    myTodo.list.forEach((noteObj, index) => {
      const li = document.createElement('li');
      li.classList.add('navbar', 'navbar-brand');
      li.setAttribute('data-index', index);
      li.innerHTML = `
    <div class="form-check">
    <input class="form-check-input" type="checkbox" id="${index}" ${
  noteObj.completed ? 'checked' : ''
} data-index=${index}>
    <label class="form-check-label" for="${index}">
     ${noteObj.description}
    </label>
    <input class='form-check-label on-hover dispaly-none' id='edit-input'>
    </div>
    <div class='icons'>
      <i class="bi bi-pencil"><span class="help">edit</span></i>
      <i class="bi bi-trash2"><span class="help">delete</span></i>
    </div>
    `;
      listView.appendChild(li);
      toggleCheckedList(li, noteObj.completed);
    });
  }
}

const myTodo = new MyTodo();

window.addEventListener('DOMContentLoaded', () => myTodo.render());
