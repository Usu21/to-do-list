const addBtn = document.querySelector('#addBtn');
const taskInput = document.querySelector('#taskInput');
const list = document.querySelector('#list');

addBtn.addEventListener('click', function () {

    const newItem = document.createElement('li');

    newItem.classList.add('item');

    newItem.textContent = taskInput.value;

    list.append(newItem);

    const itemBtns = document.createElement('div');

    newItem.append(itemBtns);

    itemBtns.className = 'item__btns';

    const doneBtn = document.createElement('i');
    doneBtn.className = 'fa-solid fa-check';
    itemBtns.append(doneBtn);

    doneBtn.addEventListener('click', function () {
        newItem.classList.toggle('done');
    })

    const deleteButton = document.createElement('i');
    deleteButton.className = 'fa-solid fa-trash';
    itemBtns.append(deleteButton);

    deleteButton.addEventListener('click', function () {
        list.removeChild(newItem);
    })

    taskInput.value = " ";
});
