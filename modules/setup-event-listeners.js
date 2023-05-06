import { refreshPage } from './code-reuse.js';
import { draggableTrue } from './draggable.js';

function setEventListener(list, theFunction, event) {
  for (let i = 0; i < list.length; i += 1) {
    list[i].addEventListener(event, theFunction);
  }
}

const startSettingEventListeners = (myTodo) => {
  const form = document.querySelectorAll('form');
  const checkbox = document.querySelectorAll('input[type=checkbox]');
  const editList = document.querySelectorAll('i.bi.bi-pencil');
  const trashList = document.querySelectorAll('i.bi.bi-trash2');
  const enter = document.querySelectorAll('i.bi.bi-arrow-90deg-left');
  const refresh = document.querySelectorAll('i.bi.bi-arrow-clockwise');
  const clear = document.querySelectorAll('#archive');
  const activateDragIcon = document.querySelectorAll('.bi-grip-vertical');

  setEventListener(form, myTodo.addTodo, 'submit');
  setEventListener(checkbox, myTodo.checkBox, 'change');
  setEventListener(trashList, myTodo.removeTodo, 'click');
  setEventListener(editList, myTodo.editDescription, 'click');
  setEventListener(enter, myTodo.addTodo, 'click');
  setEventListener(refresh, refreshPage, 'click');
  setEventListener(clear, myTodo.clearCompleted, 'click');
  setEventListener(activateDragIcon, draggableTrue, 'click');
};

export default startSettingEventListeners;
