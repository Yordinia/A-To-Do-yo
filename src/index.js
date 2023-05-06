/* eslint-disable no-use-before-define */

const listView = document.querySelector('#todo-list');

class MyTodo {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('list')) || [{
      id: 1,
      description: 'Add, Delete and Edit Notes',
      completed: false,
    },
    {
      id: 1,
      description: 'Check and Clear selected',
      completed: false,
    },
    ];
    this.checked = this.list.filter(({ completed }) => completed).length;
  }

  addTodo(e) {
    e.preventDefault();
    const inputNote = input.value.trim();
    if (inputNote.length === 0) {
      falseInput(myTodo);
      return;
    }
    const obj = new List(inputNote);
    myTodo.list.push(obj);
    form.reset();
    myTodo.render();
    console.log(this);
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

  render() {
    toLocal(myTodo);
    listView.innerHTML = '';

    console.log(`Congrats${this}`); // linters told me I need to use this
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
    <input class="form-check-input" type="checkbox" id="${index}"
     ${noteObj.completed ? 'checked' : ''} 
     data-index=${index}>
    <label class="form-check-label" for="${index}">
     ${noteObj.description}
    </label>
    <input class='form-check-label on-hover dispaly-none' id='edit-input'>
    </div>
    <div class='icons'>
      <i class="bi bi-pencil"><span class="help">edit</span></i>
      <i class="bi bi-trash2"><span class="help">delete</span></i>
    </div>
    `;
      listView.appendChild(li);
      toggleCheckedList(li, noteObj.completed);
    });
  }
}

const List = function (description) {
  this.id = myTodo.list.length + 1;
  this.description = description;
  this.completed = false;
};

const myTodo = new MyTodo();

window.addEventListener('DOMContentLoaded', () => myTodo.render());
