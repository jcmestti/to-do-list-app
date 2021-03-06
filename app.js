const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

//Add a new task to the list
const addNewTask = (newTask) => {
    const newLi = `
            <li class="list-group-item d-flex justify-content-between align-items-center text-light">
                <span>${newTask}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
    `;

    list.innerHTML += newLi;
};

const filterTasks = (searchedTask) => {
    
    Array.from(list.children)
        .filter((task) => !task.textContent.toLowerCase().includes(searchedTask))
        .forEach((task) => task.classList.add('filtered'));

    Array.from(list.children)
        .filter((task) => task.textContent.toLowerCase().includes(searchedTask))
        .forEach((task) => task.classList.remove('filtered'));

};

//Listen for new tasks
addForm.addEventListener('submit', e => {
    
    e.preventDefault();
    
    const newTask = addForm.add.value.trim();

    if(newTask.length) {
        addNewTask(newTask);
        addForm.reset();
    } 
}); 

//Listen for the removal of tasks
list.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }

});

//Search for a specific task
search.addEventListener('keyup', () => {

    const searchedTask = search.value.trim().toLowerCase();
    filterTasks(searchedTask);

});