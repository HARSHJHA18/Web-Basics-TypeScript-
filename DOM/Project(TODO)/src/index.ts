interface TODO {
    id: string;
    task: string;
};

//TO store data

let todos: TODO[] = [];

// Targeting the elements
let form = document.getElementById("form") as HTMLFormElement;  //Type assertions
let input = document.getElementById("inputArea") as HTMLInputElement;
let listItems = document.getElementById("items") as HTMLUListElement;

//Adding tasks

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = input.value.trim();
    console.log(value);
    let newTask: TODO = {
        id: Date.now().toString(),
        task: value,
    }
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
``
        delbtn.addEventListener("click", () => {
            deleteTodo(display.id);
        });

        let editbtn = document.createElement("button");
        editbtn.textContent = "Edit";

        li.appendChild(editbtn);

        editbtn.addEventListener("click", () => {
            editTodo(display.id);
        });
    }


};

function deleteTodo(id: string) {
    todos = todos.filter(todo => todo.id != id);
    render();
};

function editTodo(id : string){
    
}