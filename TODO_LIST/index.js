function main() {

    // Selecting the form :
    const todo_form = document.querySelector('#todo-form');

    // Selecting the 'ul', 'input'
    const ul = document.getElementById('lists');
    const todo_input = document.getElementById('todo-input');
    

    /* --------------- Adding list to the 'ul' -------------------- */
    todo_form.addEventListener('submit', (e) => {
        e.preventDefault();     // preventing default submit behaviour
        
        // Get the input value and then empty the input field :
        const todo_input_value = todo_input.value;
        todo_input.value = '';

        // push the new value in the lists array :

        
        // Create a new 'li' with its buttons and content :
        const li = document.createElement('li');
        li.classList.add('list');
        li.innerHTML = `
            <button class='done'>C</button>
            <span>${todo_input_value}</span>
            <button class='remove'>X</button>
        `
            
        // Append the li inside ul :
        ul.appendChild(li);
    })
    
    
    /* ------ Completing and Removing lists with Event-delegation ---------- */
    ul.addEventListener('click', (e) => {
        if(e.target.classList.contains('done')) {   // if the class is 'done'
            const li = e.target.parentElement
            const span = li.querySelector('span');
            span.style.textDecoration = 'line-through';
            // li.classList.add('completed');  // for other feature
        } else if(e.target.classList.contains('remove')) {  // if the class is 'remove'
            const li = e.target.parentElement
            li.remove();
        }
    })


}
main();

// function show_completed() {
//     const ul = document.getElementById('lists');
//     const lists = Array.from(document.querySelectorAll('.list'));
//     console.log(lists);
//     const completed_lists = lists.filter(list => list.classList.contains('completed')).join('');
//     ul
// }
// const show_completed_btn = document.querySelector('#show-completed');
// show_completed_btn.addEventListener('click', () => {
//     show_completed();
// })
