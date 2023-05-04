const listView = document.querySelector('#todo-list');

export function toLocal(todoObject) {
  localStorage.setItem('list', JSON.stringify(todoObject.list));
}

export function listEmpty() {
  const li = document.createElement('li');
  li.classList.add('navbar-brand');
  li.innerHTML = `<p> 
                      <legend> Notes are clear ! </legend> 
                    </p>`;
  listView.appendChild(li);
}