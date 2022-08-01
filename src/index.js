import _ from 'lodash';
import './style.css'
/* ------- New code start ------*/

window.addEventListener('load', () => {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  const submit = document.querySelector('#add-new-to-do');
  const task_list = document.querySelector('#tasks');
  const task = document.querySelector('#input-item');
  submit.addEventListener('submit', (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (task.value === '') {
    document.getElementById('error').innerHTML = 'please add task first';
    return;
  } 
      const taskItem = {
        desc: e.target.elements.taskitem.value,
        completed: false,
      }

      document.getElementById('error').innerHTML = '';
      e.target.reset();
      todos.push(taskItem);
      localStorage.setItem("todos", JSON.stringify(todos));
      window.location.reload();
});

const displayList = ()=> {
  const storedList = JSON.parse(localStorage.getItem('todos'));
  storedList.forEach((task) => {
  const task_div = document.createElement("div");
  task_div.classList.add("task");
  task_list.appendChild(task_div);
  const task_content = document.createElement('div');
  task_content.classList.add('task-content');
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = true;
  checkbox.classList.add('completed');
  checkbox.addEventListener('change', ()=> {
    alert(checkbox.checked);
  });
  task_content.appendChild(checkbox);
  const input = document.createElement('input');
  input.type =  'text';
  input.setAttribute('id', 'text');
  input.classList.add('text');
  input.setAttribute('readonly', 'readonly');
  input.value = task.desc;
  task_content.appendChild(input);
  task_div.appendChild(task_content);
  const actionbtn = document.createElement('div');
  actionbtn.classList.add("action");
  const editbtn = document.createElement("button");
  editbtn.classList.add('edit');
  editbtn.setAttribute('id', 'edit');
  editbtn.innerHTML = 'Edit';
  editbtn.addEventListener('click', (e) => {
    if(editbtn.innerHTML.toLowerCase() === 'edit') {
    input.removeAttribute('readonly');
    input.focus();
    input.style.color = '#ec4899';
    editbtn.innerText = "Save";
    const editText = task_content.querySelector('#text');
    task.desc = e.target.value;
    localStorage.setItem('todos', JSON.stringify(todos))
     } else { 
      input.setAttribute('readonly', 'readonly');
      editbtn.innerText = "Edit";
      input.style.color = '#fff';
  }
  displayList();
  });
  actionbtn.appendChild(editbtn);
  const deletebtn = document.createElement("button");
  deletebtn.classList.add('deletebtn');
  deletebtn.setAttribute('id', 'deletebtn');
  deletebtn.innerHTML = 'Delete';
  deletebtn.addEventListener('click', (e) => {
    //const element = deletebtn.parentElement.parentElement;
    //element.remove();
    todos = todos.filter(task => task != taskItem)
    localStorage.setItem('todos', JSON.stringify(todos));
    displayList();
  });
  actionbtn.append(deletebtn);
  task_div.append(actionbtn);
});
}
displayList();
});

/*-------  New code ends ----*/

