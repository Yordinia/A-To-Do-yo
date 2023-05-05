const form = document.querySelector('form');
const listView = document.querySelector('#todo-list');

export function toLocal(todoObject) {
  localStorage.setItem('list', JSON.stringify(todoObject.list));
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

export function setEventListener(list, theFunction, event) {
  for (let i = 0; i < list.length; i += 1) {
    list[i].addEventListener(event, theFunction);
  }
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