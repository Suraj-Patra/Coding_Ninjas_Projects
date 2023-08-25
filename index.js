let todo_arr = [
    { todo: 'Hello', isCompleted: false },
    { todo: 'Hi', isCompleted: false },
    { todo: 'Bye', isCompleted: false },
    { todo: 'When', isCompleted: false },
];

// Selecting the 'form', 'ul' and 'input' :
const todo_form = document.querySelector('#todo-form');
const ul = document.getElementById('lists');
const todo_input = document.getElementById('todo-input');


/* --------------- Showing Todo list from the array  -------------------- */
function show_todo(todo_arr) {
    ul.innerHTML = '';
    todo_arr.forEach(obj => {
        // Create a new 'li' with its buttons and content :
        const li = document.createElement('li');
        li.classList.add('list');
        li.innerHTML = `
            <button class='done'>&#10004;</button>
            <span>${obj.todo}</span>
            <button class='remove'>&#10006;</button>
        `

        obj.isCompleted?
            li.classList.add('completed'):
            li.classList.remove('completed');  
            
        // Append the li inside ul :
        ul.appendChild(li);
    })
    tasks_left();
}
show_todo(todo_arr);

    
/* --------------- Adding list to the array -------------------- */
todo_form.addEventListener('submit', (e) => {
    e.preventDefault();     // preventing default submit behaviour
    
    // Get the input value and then empty the input field :
    const content = todo_input.value;
    todo_input.value = '';
    todo_arr.push({todo: content, isCompleted: false});
    show_todo(todo_arr);        
})


/* ------ Completing and Removing lists with Event-delegation ---------- */
ul.addEventListener('click', (e) => {
    const li = e.target.parentElement;
    const span = li.querySelector('span');
    const content = span.textContent;
    const index = todo_arr.findIndex(obj => obj.todo===content);

    if(e.target.classList.contains('done')) {   // if the class is 'done'
        // toggle 'isCompleted' :
        todo_arr[index].isCompleted = !(todo_arr[index].isCompleted);        
        // show the updated list :
        show_todo(todo_arr);
    } else if(e.target.classList.contains('remove')) {  // if the class is 'remove'
        // Remove the object with the content :
        todo_arr.splice(index, 1);        
        // show the updated list :
        show_todo(todo_arr);
    }
})

/* --------------- complete all tasks ---------------- */
function complete_all() {
    todo_arr = todo_arr.map(obj => {
        return {...obj, isCompleted:true}
    }); 
    show_todo(todo_arr);
}
const complete_all_btn = document.querySelector('#complete-all');
complete_all_btn.addEventListener('click', () => {
    complete_all();
})

/* ----------------- clear the completed tasks ------------ */
function clear_completed() {
    todo_arr = todo_arr.filter(obj => !obj.isCompleted); 
    show_todo(todo_arr);
}
const clear_completed_btn = document.querySelector('#clear-completed');
clear_completed_btn.addEventListener('click', () => {
    clear_completed();
})


/* ----------------- Tasks left ---------------- */
function tasks_left() {
    const span = document.querySelector('#tasks-left');
    let count = 0;
    todo_arr.forEach(obj => !obj.isCompleted && count++);
    span.textContent = `${count} tasks left`;
}
tasks_left();


/* ------------------- show completed task --------------- */
function show_completed() {
    const completed_list_arr = todo_arr.filter(obj => obj.isCompleted); 
    show_todo(completed_list_arr);
}
const show_completed_btn = document.querySelector('#show-completed');
show_completed_btn.addEventListener('click', () => {
    show_completed();
})


/* -------------- show all tasks ------------------- */
function show_all() {
    show_todo(todo_arr);
}
const show_all_btn = document.querySelector('#show-all');
show_all_btn.addEventListener('click', () => {
    show_all();
})


/* --------------- show uncompleted tasks ---------------- */
function show_uncompleted() {
    const completed_list_arr = todo_arr.filter(obj => !obj.isCompleted); 
    show_todo(completed_list_arr);
}
const show_uncompleted_btn = document.querySelector('#show-uncompleted');
show_uncompleted_btn.addEventListener('click', () => {
    show_uncompleted();
})




