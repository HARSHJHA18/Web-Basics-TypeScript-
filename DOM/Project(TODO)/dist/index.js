;
//TO store data
let todos = [];
// Targeting the elements
let form = document.getElementById("form"); //Type assertions
let input = document.getElementById("inputArea");
let listItems = document.getElementById("items");
//Adding tasks
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = input.value.trim();
    console.log(value);
    let newTask = {
        id: Date.now().toString(),
        task: value,
    };
    todos.push(newTask);
    // console.log(todos);
    input.value = "";
    render();
});
function render() {
    listItems.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        let display = todos[i];
        let li = document.createElement("li");
        li.textContent = display.task;
        listItems.appendChild(li);
        let delbtn = document.createElement("button");
        delbtn.textContent = "Delete";
        li.appendChild(delbtn);
        ``;
        delbtn.addEventListener("click", () => {
            deleteTodo(display.id);
        });
        let editbtn = document.createElement("button");
        editbtn.textContent = "Edit";
        li.appendChild(editbtn);
    }
}
;
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id != id);
    render();
}
;
export {};
