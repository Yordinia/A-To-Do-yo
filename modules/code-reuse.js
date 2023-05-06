const form = document.querySelector('form');
const listView = document.querySelector('#todo-list');

export function createLi(noteObj, index, isDragOn) {
  const li = document.createElement('li');
  li.classList.add('navbar', 'navbar-brand');
  li.setAttribute('data-index', index);
  if (isDragOn) { li.setAttribute('draggable', true); } else { li.setAttribute('draggable', false); }

  li.innerHTML = `
<div class="form-check">
<input class="form-check-input" type="checkbox" id="${index}" ${
  noteObj.completed ? 'checked' : ''
} data-index=${index}>
<label class="form-check-label" for="${index}">
 ${noteObj.description}
</label>
<input class='dispaly-none form-check-label on-hover' id='edit-input'>
</div>
<div class='icons'>
  <i class="bi bi-pencil"><span class="help">edit</span></i>
  <i class="bi bi-trash2"><span class="help">delete</span></i>
  <i class="bi bi-three-dots-vertical"></i>
</div>
`;
  return li;
}

export function toLocal(list) {
  localStorage.setItem('list', JSON.stringify(list));
}

export function fromLocal() {
  return JSON.parse(localStorage.getItem('list'));
}

export function refreshPage() {
  document.location.reload();
}

export function updateId(myList) {
  myList.forEach((object, index) => {
    object.id = index;
  });
  toLocal(myList);
}

export function falseInput() {
  const falseInput = form.querySelector('#false-input');
  form.reset();
  falseInput.classList.replace('setVisibilityHidden', 'setVisibility');
  setTimeout(() => {
    falseInput.classList.replace('setVisibility', 'setVisibilityHidden');
  }, 2500);
  return false;
}

export function listEmpty() {
  const li = document.createElement('li');
  li.classList.add('navbar-brand');
  li.innerHTML = `<p> 
                    <legend> Notes are clear ! </legend> 
                  </p>`;
  listView.appendChild(li);
}