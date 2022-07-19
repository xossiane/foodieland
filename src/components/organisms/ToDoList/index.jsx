import { useState } from "react";
function ToDoList(){
    const [toDo, setToDo] = useState([{
        text: "This is a simple todo",
        isDone: false
    }]);

    /* adiciona uma nova tarefa */
    const addTodo = text => {
        const newToDos = [...toDo, {text}];
        setToDo(newToDos);
    }


    /* marca a tarefa como feita */
    const markToDo = index => {
        const newToDos = [...toDo];
        newToDos[index].isDone = true;
        setToDo(newToDos);
    }

    /* remove tarefa feita */
    const removeToDo = index => {
        const newToDos = [...toDo];
        newToDos.splice(index, 1); //muda o conteúdo da array, removendo ou substituindo elementos existentes com novos
        setToDo(newToDos);
    }


    return (
        
        <p>This is going to be our list</p>
    )
}
export default ToDoList;