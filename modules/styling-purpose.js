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

export function toggleCheckedList(li, flag, isDragOn) {
  const edit = li.lastElementChild.firstElementChild;
  const drag = li.lastElementChild.lastElementChild;

  li.classList.toggle('checked', flag);
  edit.classList.toggle('setVisibilityHidden', flag);
  if(isDragOn){
    drag.style.display = 'inline-block';
  }
  else{
    drag.style.display = 'none';
  }
}

export function showDraggable(bool) {
  const dragIcon =  document.querySelectorAll('.bi-three-dots-vertical');
 
  dragIcon.forEach(drag=> {
    if(bool){
      drag.style.display = 'inline-block';
    }
    else{
      drag.style.display = 'none';
    }
  })

}

