const taskInput = document.getElementById('taskInput')
const addTask = document.getElementById('addTask')
const taskList = document.getElementById('taskList')

function updateOfTotal() {
  const tasks = document.querySelectorAll('.task');
  const completed = document.querySelectorAll('.task.done');
  totalCount.textContent = tasks.length;
  doneCount.textContent = completed.length;
}

addTask.addEventListener('click',()=>{
    if(taskInput.value.trim().length > 0){
    const task = document.createElement('div');
    task.className = 'task';

    const done= document.createElement('button')
    done.innerText = 'Done'

    done.addEventListener('click',()=>{
        span.classList.toggle('done')
        updateOfTotal()
    })
    const Remove= document.createElement('button')
    Remove.innerText = 'Delete'

    Remove.addEventListener('click',()=>{
        task.remove()
        updateOfTotal()
    })
    const span = document.createElement('span');
    span.textContent = taskInput.value;
    
     task.append(span,done,Remove);
     taskList.appendChild(task);
    taskInput.value = ""
    updateOfTotal()
    }else{
        alert('enter task please')
    }
})