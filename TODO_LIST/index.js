const todo_arr = [
    { todo: 'Hello', isCompleted: false },
    { todo: 'Hi', isCompleted: false },
    { todo: 'Bye', isCompleted: false },
    { todo: 'When', isCompleted: false },
];

// Selecting the form :
const todo_form = document.querySelector('#todo-form');

// Selecting the 'ul', 'input'
const ul = document.getElementById('lists');
const todo_input = document.getElementById('todo-input');

function show_todo(todo_arr) {
    ul.innerHTML = '';
    todo_arr.forEach(obj => {
        // Create a new 'li' with its buttons and content :
        const li = document.createElement('li');
        li.classList.add('list');
        li.innerHTML = `
            <button class='done'>C</button>
            <span>${obj.todo}</span>
            <button class='remove'>X</button>
        `

        obj.isCompleted?
            li.classList.add('completed'):
            li.classList.remove('completed');  
            
        // Append the li inside ul :
        ul.appendChild(li);
    })
}
show_todo(todo_arr);


function main() {

    
    /* --------------- Adding list to the 'ul' -------------------- */
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
        if(e.target.classList.contains('done')) {   // if the class is 'done'
            const li = e.target.parentElement;
            const span = li.querySelector('span');
            const content = span.textContent;
            const index = todo_arr.findIndex(obj => obj.todo===content);
            
            if(todo_arr[index].isCompleted)
                todo_arr[index].isCompleted = false;
            else
                todo_arr[index].isCompleted = true;
            
            show_todo(todo_arr)
        } else if(e.target.classList.contains('remove')) {  // if the class is 'remove'
            const li = e.target.parentElement
            li.remove();
        }
    })


}
main();

function show_completed() {
    const completed_list_arr = todo_arr.filter(obj => obj.isCompleted); 
    show_todo(completed_list_arr);
}
const show_completed_btn = document.querySelector('#show-completed');
show_completed_btn.addEventListener('click', () => {
    show_completed();
})


function show_all() {
    show_todo(todo_arr);
}
const show_all_btn = document.querySelector('#show-all');
show_all_btn.addEventListener('click', () => {
    show_all();
})


function show_uncompleted() {
    const completed_list_arr = todo_arr.filter(obj => !obj.isCompleted); 
    show_todo(completed_list_arr);
}
const show_uncompleted_btn = document.querySelector('#show-uncompleted');
show_uncompleted_btn.addEventListener('click', () => {
    show_uncompleted();
})
