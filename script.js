document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('deleteAllButton').addEventListener('click', deleteAllTasks);
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
document.getElementById('categoryFilter').addEventListener('change', filterTasks);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    const categorySelect = document.getElementById('categorySelect');
    const category = categorySelect.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.dataset.category = category;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    const textNode = document.createTextNode(taskText);
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '&times;';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(textNode);
    li.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
}

function deleteAllTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}

function filterTasks() {
    const selectedCategory = document.getElementById('categoryFilter').value;
    const tasks = document.querySelectorAll('#taskList li');

    tasks.forEach(task => {
        if (selectedCategory === 'all' || task.dataset.category === selectedCategory) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}
