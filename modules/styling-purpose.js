const input = document.querySelector('#new-item');
const clear = document.querySelector('#archive');

const classOns = ['mouseover', 'focus', 'keyup'];
const classOffs = ['mouseout', 'blur'];

let hover = false;

function classOn(e) {
  input.classList.toggle('on-hover', true);
  if (e.type === 'mouseover') hover = true;
}

function classOff(e) {
  if (e.type === 'mouseout') {
    let flag = false;
    if (hover === false || e.target.value !== '') flag = true;
    // if(e.target.value === '' && document.hasFocus(e.target)=== true) flag = true;
    if (flag) return;
  }
  input.classList.toggle('on-hover', false);
}

function hideCursor(e) {
  e.target.style.cursor = 'none';
  hover = true;
}

classOns.forEach((event) => input.addEventListener(event, classOn));
classOffs.forEach((event) => input.addEventListener(event, classOff));

input.addEventListener('keyup', hideCursor);

export function toggleClearCompleted(theList) {
  const complete = theList.checked !== 0;
  if (complete) { clear.classList.toggle('disabled', false); } else { clear.classList.toggle('disabled', true); }
}

export function toggleCheckedList(li, flag) {
  const trash = li.lastElementChild.lastElementChild;
  const edit = li.lastElementChild.firstElementChild;

  li.classList.toggle('checked', flag);
  edit.classList.toggle('setVisibilityHidden', flag);
  trash.classList.toggle('checked', false);
}

export function showDraggable(e) {
  const li = e.target;
  li.classList.
}

