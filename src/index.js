/* eslint-disable no-use-before-define */

import './style.css';
import { toggleClearCompleted, toggleCheckedList, showDraggable} from '../modules/styling-purpose.js';

import {
  setEventListener, toLocal, falseInput, listEmpty, refreshPage, updateId,
} from '../modules/code-reuse.js';

import draggable from '../modules/draggable.js';


const input = document.querySelector('#new-item');
const form = document.querySelector('form');
const listView = document.querySelector('#todo-list');

class MyTodo {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('list')) || [];
    this.checked = this.list.filter(({ completed }) => completed).length;
  }

  addTodo(e) {
    e.preventDefault();
    console.log(this);
    const inputNote = input.value.trim();
    if (inputNote.length === 0) {
      falseInput(myTodo);
      return;
    }
    const obj = new List(inputNote);
    myTodo.list.push(obj);
    form.reset();
    myTodo.render();
  }

  removeTodo(li) {
    const z = (this.checked === undefined) ? this.closest('li') : li;
    const { index } = z.dataset;
    myTodo.list.splice(index, 1);
    updateId(myTodo.list);
    if (z.classList.contains('checked')) {
      myTodo.checked -= 1;
    }
    toggleClearCompleted(myTodo);
    myTodo.render();
  }

  editDescription() {
    // activate edit
    const li = this.closest('li');
    const { index } = li.dataset;
    const pastDescription = li.firstElementChild.children[1];
    const inputElem = li.firstElementChild.lastElementChild;

    inputElem.value = pastDescription.innerText;

    pastDescription.classList.add('dispaly-none');
    inputElem.classList.remove('dispaly-none');
    inputElem.focus();

    const updateDescription = () => {
      const newNote = inputElem.value.trim();
      if (newNote === '') {
        myTodo.removeTodo(li);
      } else {
        myTodo.list[index].description = newNote;
        pastDescription.innerText = newNote;
        toLocal(myTodo);
        pastDescription.classList.remove('dispaly-none');
        inputElem.classList.add('dispaly-none');
        inputElem.style.border = 'none';
      }
    };

    inputElem.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') inputElem.blur();
    });

    inputElem.addEventListener('blur', updateDescription);
  }

  clearCompleted() {
    const completedLength = myTodo.list.filter(({ completed }) => completed).length;
    myTodo.list = myTodo.list.filter(({ completed }) => !completed);
    myTodo.checked -= completedLength;
    updateId(myTodo.list);
    //toggleClearCompleted(myTodo);
    console.log('this is clear completed - list',myTodo.list,'just cleared ', completedLength,' notes!');
    myTodo.render();
  }

  checkBox() {
    const li = this.parentElement.parentElement;
    toggleCheckedList(li, this.checked);

    if (this.checked) {
      myTodo.list[this.dataset.index].completed = true;
      myTodo.checked += 1;

      if (myTodo.checked === 1) {
      // Activate Clear Completed
        toggleClearCompleted(myTodo);
      }
    } else {
      myTodo.list[this.dataset.index].completed = false;
      myTodo.checked -= 1;

      if (myTodo.checked === 0) {
      // Deactivate clear completed
        toggleClearCompleted(myTodo);
      }
    }

    toLocal(myTodo);
  }

  render() {
    toLocal(myTodo);
    listView.innerHTML = '';

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
      <i class="bi bi-three-dots-vertical setVisibilityHidden"></i>
    </div>
    `;
      listView.appendChild(li);
      toggleCheckedList(li, noteObj.completed);
    });

    const checkbox = document.querySelectorAll('input[type=checkbox]');
    const editList = document.querySelectorAll('i.bi.bi-pencil');
    const trashList = document.querySelectorAll('i.bi.bi-trash2');
    const enter = document.querySelectorAll('i.bi.bi-arrow-90deg-left');
    const refresh = document.querySelectorAll('i.bi.bi-arrow-clockwise');
    const clear = document.querySelectorAll('#archive');
    const dragIcon =  document.querySelectorAll('.bi-three-dots-vertical')
    const li =  document.querySelectorAll('li')

    // set event listener on elements after creating them

    setEventListener(checkbox, myTodo.checkBox, 'change');
    setEventListener(trashList, myTodo.removeTodo, 'click');
    setEventListener(editList, myTodo.editDescription, 'click');
    setEventListener(enter, myTodo.addTodo, 'click');
    setEventListener(refresh, refreshPage, 'click');
    setEventListener(clear, myTodo.clearCompleted, 'click');
    setEventListener(dragIcon, draggable, 'click');
    setEventListener(li, showDraggable, 'click');

    form.addEventListener('submit', myTodo.addTodo);
    toggleClearCompleted(myTodo);
    console.log('Render finished', this);
  }
}

const List = function(description) {
  this.id = myTodo.list.length;
  this.description = description;
  this.completed = false;
}

const myTodo = new MyTodo();
  

window.addEventListener('DOMContentLoaded', () => myTodo.render())
