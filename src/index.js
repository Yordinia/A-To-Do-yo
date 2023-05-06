/* eslint-disable no-use-before-define */

import './style.css';
import { toggleClearCompleted, toggleCheckedList } from '../modules/styling-purpose.js';

import {
  createLi, toLocal, falseInput, listEmpty, updateId, fromLocal,
} from '../modules/code-reuse.js';

import startSettingEventListeners from '../modules/setup-event-listeners.js';

const input = document.querySelector('#new-item');
const form = document.querySelector('form');
const listView = document.querySelector('#todo-list');

class MyTodo {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('list')) || [];
    this.checked = this.list.filter(({ completed }) => completed).length;
    this.draggable = JSON.parse(localStorage.getItem('draggable')) || false;
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
    toLocal(myTodo.list);
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
        pastDescription.classList.remove('dispaly-none');
        inputElem.classList.add('dispaly-none');
        inputElem.style.border = 'none';
      }
      toLocal(myTodo.list);
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
    // toggleClearCompleted(myTodo);
    console.log(this);
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

    toLocal(myTodo.list);
  }

  render() {
    myTodo.list = fromLocal();
    listView.innerHTML = '';

    // If there's no value in the list
    if (myTodo.list.length === 0) {
      listEmpty();
    }
    // Render new todo list based on updated tasks array
    myTodo.list.forEach((noteObj, index) => {
      const li = createLi(noteObj, index, myTodo.draggable);
      listView.appendChild(li);
      toggleCheckedList(li, noteObj.completed, myTodo.draggable);
    });

    // set event listener on elements after creating them
    startSettingEventListeners(myTodo);
    toggleClearCompleted(myTodo);
    console.log('Render finished', this);
  }
}

const List = function (description) {
  this.id = myTodo.list.length;
  this.description = description;
  this.completed = false;
};

const myTodo = new MyTodo();

window.addEventListener('DOMContentLoaded', () => {
  myTodo.render();
  localStorage.setItem('draggable', myTodo.draggable);
});
