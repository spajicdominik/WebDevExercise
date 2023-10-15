document.getElementById('button_click').addEventListener('click', function(){
    const taskValue = document.getElementById('task');
    const taskList = document.getElementById('list_form');

    const listItem = document.createElement('li');
    listItem.innerHTML = taskValue.value;
    taskList.appendChild(listItem);
});