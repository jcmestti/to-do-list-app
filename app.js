const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const addNewTask = newTask => {
    const newLi = `
            <li class="list-group-item d-flex justify-content-between align-items-center text-light">
                <span>${newTask}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
    `;

    list.innerHTML += newLi;
};

addForm.addEventListener('submit', e => {
    
    e.preventDefault();
    
    const newTask = addForm.add.value.trim();

    if(newTask.length) {
        addNewTask(newTask);
        addForm.reset();
    } 
}); 