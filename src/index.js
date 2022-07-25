import _ from 'lodash';
import './style.css'
/*
window.changed = (i, item) => {
  const change = JSON.parse(localStorage.getItem('tasks'));
  for (let j = 0; j < change.length; j += 1) {
    if (task.tasklist[j].description === item) {
      task.tasklist[j].completed = true;
      localStorage.setItem('tasks', JSON.stringify(task.tasklist));
    }
  }
  window.location.reload();
};



setInterval(() => {
  const countmsg = document.getElementById('msgs');
  countmsg.innerHTML = `${task.tasklist.length}&nbsp;tasks`;
}, 1000);

window.deleteTask = (i) => {
  task.tasklist.splice(i, 1);
  task.tasklist.forEach((item) => {
    if (item.index <= 0) {
      item.index = 1;
    } else {
      item.index -= 1;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(task.tasklist));
  window.location.reload();
};

const saveTask = (i, item) => {
  const updated = prompt('update the task', item);
  if (updated === null) return item;
  task.tasklist[i].description = updated;
  localStorage.setItem('tasks', JSON.stringify(task.tasklist));
  return true;
};

window.editTask = (i, element) => {
  const list = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < list.length; i += 1) {
    if (task.tasklist[i].description === element) {
      const updatedTask = task.tasklist[i].description;
      saveTask(i, updatedTask);
    }
  }
  window.location.reload();
};

const element = document.getElementById('msg-logo');
const icon = new Image();
icon.src = refresh;
element.appendChild(icon);

window.clearAllCompletedTasks = () => {
  const completedList = JSON.parse(localStorage.getItem('tasks'));
  const len = completedList.length;
  for (let j = 0; j < len; j += 1) {
    if (task.tasklist[j].completed === true) {
      task.tasklist.splice(j, 1);
      j -= 1;
      localStorage.setItem('tasks', JSON.stringify(task.tasklist));
      window.location.reload();
    }
  }
};
  */
/* ------- New code start ------*/

window.addEventListener('load', () => {
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
      document.getElementById('error').innerHTML = '';
      const task_text = task.value
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
      input.value = task_text;
      task_content.appendChild(input);
      task_div.appendChild(task_content);
      const actionbtn = document.createElement('div');
      actionbtn.classList.add("action");
      const editbtn = document.createElement("button");
      editbtn.classList.add('edit');
      editbtn.setAttribute('id', 'edit');
      editbtn.innerHTML = 'Edit';
      editbtn.addEventListener('click', () => {
        if(editbtn.innerHTML.toLowerCase() === 'edit') {
        input.removeAttribute('readonly');
        input.focus();
        input.style.color = '#ec4899';
        editbtn.innerText = "Save";
        } else { 
          input.setAttribute('readonly', 'readonly');
          editbtn.innerText = "Edit";
          input.style.color = '#fff';
      }
      });
      actionbtn.appendChild(editbtn);
      const deletebtn = document.createElement("button");
      deletebtn.classList.add('deletebtn');
      deletebtn.setAttribute('id', 'deletebtn');
      deletebtn.innerHTML = 'Delete';
      deletebtn.addEventListener('click', () => {
        const element = deletebtn.parentElement.parentElement;
        element.remove();
      });
      actionbtn.append(deletebtn);
      task_div.append(actionbtn);
      task.value = '';
});
  
  
});

/*-------  New code ends ----*/

