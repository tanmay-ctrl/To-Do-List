let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const inputField = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
inputField.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = inputField.value.trim();

    if (taskText === '') return;
    const isDuplicate = tasks.some(task => task.text.toLowerCase() === taskText.toLowerCase());
    if (isDuplicate) {
        alert("This task is already on your list!");
        return;
    }
    tasks.push({ text: taskText, completed: false });
    saveTasks(); 
    
    inputField.value = '';
    inputField.focus(); 
    
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = '';
    
    if (tasks.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.textContent = "You're all caught up! 📋";
        emptyMessage.style.justifyContent = 'center';
        emptyMessage.style.color = '#64748b';
        emptyMessage.style.backgroundColor = 'transparent';
        emptyMessage.style.borderLeft = 'none';
        emptyMessage.style.boxShadow = 'none';
        taskList.appendChild(emptyMessage);
        return;
    }

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        const taskContent = document.createElement('div');
        taskContent.className = 'task-content';
        
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = task.text;
        if (task.completed) {
            span.classList.add('completed');
            li.style.borderLeftColor = '#22c55e';
        }
        
        taskContent.appendChild(span);
        const actions = document.createElement('div');
        actions.className = 'actions';
        
        const doneBtn = document.createElement('button');
        doneBtn.className = 'done-btn';
        doneBtn.textContent = '✓';
        doneBtn.onclick = () => toggleTask(index);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'X';
        deleteBtn.onclick = () => deleteTask(index);
        
        actions.appendChild(doneBtn);
        actions.appendChild(deleteBtn);
        
        li.appendChild(taskContent);
        li.appendChild(actions);
        
        taskList.appendChild(li);
    });
}
renderTasks();