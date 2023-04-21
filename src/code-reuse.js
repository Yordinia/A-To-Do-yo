const form = document.querySelector('form');
const listView = document.querySelector('#todo-list');

export function toLocal(todoObject) {
  localStorage.setItem('list', JSON.stringify(todoObject.list));
}

export function refreshPage() {
  location.reload();
}

export function updateId(my_list) {
  my_list.forEach((object, index) => {
    object.id = index;
  });
  toLocal(my_list);
}

export function setEventListener(list, theFunction, event) {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener(event, theFunction);
  }
}

export function falseInput(a) {
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