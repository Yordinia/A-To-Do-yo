const form = document.querySelector('form');
const listView = document.querySelector('#todo-list');

export function falseInput() {
    const falseInput = form.querySelector('#false-input')
    form.reset()
    falseInput.classList.replace('setVisibilityHidden', 'setVisibility')
    setTimeout(()=>{
      falseInput.classList.replace('setVisibility','setVisibilityHidden')
      }, 2500)
    return false;
}

export function listEmpty() {
    const li = document.createElement('li');
    li.classList.add('navbar-brand')
    li.innerHTML = `<p style='textAlign: left; padding-left: 1rem'> 
                      <legend> Notes are clear ! </legend> 
                    </p>`;
    listView.appendChild(li);
}