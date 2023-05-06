/* eslint-disable */

import { updateId } from './code-reuse.js';
import { showDraggable } from './styling-purpose.js';

let beingDraggedId;
let droppedOver;
let droppedOverId;


function dragStart({ target: li }) {
  beingDragged = li;
  beingDraggedId = li.getAttribute('data-index') * 1;
}

const dragEnd = ({ target }) => {
  droppedOver = target.closest('li');
  droppedOverId = droppedOver.getAttribute('data-index') * 1;
  finilizeDrag();
};

function finilizeDrag() {
  const fromLocal = JSON.parse(localStorage.getItem('list'));
  const a = fromLocal[beingDraggedId];
  const b = fromLocal[droppedOverId];
  // using map
  const list = fromLocal.map((obj, i) => {
    if (i === beingDraggedId) return b;
    if (i === droppedOverId) return a;
    return obj;
  });
  updateId(list);
}

function toggleDrag(local) {
  let isDragOn;
  if (local) {
    isDragOn = false;
    local = false;
  } else {
    isDragOn = true;
    local = true;
  }
  localStorage.setItem('draggable', local);

  return isDragOn;
}

export function draggableTrue() {
  const local = JSON.parse(localStorage.getItem('draggable'))
  const lis = document.querySelectorAll('li');
  const isDragOn = toggleDrag(local);
  showDraggable(isDragOn);

  if (isDragOn) {
    lis.forEach((li) => {
      li.setAttribute('draggable', true);
      li.style.cursor = 'move';
      li.classList.add = 'on-hover';
    });
    document.ondragstart = dragStart;
    document.ondragover = (event) => {
      event.preventDefault();
    };
    document.ondrop = dragEnd;
  } else {
    const lis = document.querySelectorAll('li');
    lis.forEach((li) => {
      li.setAttribute('draggable', false);
      li.style.cursor = 'pointer';
    });
  }
}
