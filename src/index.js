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
  if (task.value === '') {
    document.getElementById('error').innerHTML = 'please add task first';
  } else {
      document.getElementById('error').innerHTML = '';
      const task_text = task.value
      const task_div = document.createElement('div');
      task_div.classList.add('task');
      const task_content = document.createElement('div');
      task_content.classList.add('task-content');
      task_div.append(task_content);
      const check = document.createElement('input');
      check.type = 'checkbox';
      check.classList.add('completed');
      task_content.append(check);
      const input = document.createElement('input');
      input.type =  'text';
      input.setAttribute('id', 'text');
      input.setAttribute('readonLy', 'readonLy');
      input.value = task_text;
      task_content.append(input);
      const action = document.createElement('div');
      action.classList.add('action');
      const edit = document.createElement('button');
      edit.setAttribute('id', 'edit');
      const deletebtn = document.createElement('button');
      deletebtn.setAttribute('id', 'deletebtn');
      action.append(edit);
      action.append(deletebtn);
      task_div.append(action);
      task_list.append(task_div);
    }
  
});
  

  
});

/*-------  New code ends ----*/

