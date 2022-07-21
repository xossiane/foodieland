import { useState } from "react";
import '../ToDoList/TodoList.scss'
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import { Card } from 'react-bootstrap';
import undone from '/assets/undone.png'
import horizontalbar from '/assets/horizontalbar.png'

function ToDoSteps({toDoSteps, index, ToggleTodo, handleClick}){
    return(
        <>
        <div className="ToDoSteps">
            <div>
                <button className="TodoList__btn"
                onClick={
                    () => ToggleTodo(index)
                    }>
        
                    <img src={undone} 
                    onClick={handleClick} 
                    style = {{background: toDoSteps.isDone ? "black" : " ", borderRadius: toDoSteps.isDone ? "64px" : ""  }}
        
                    alt="" />
                    </button>
            </div>
            <span className="TodoList__items" style={{textDecoration: toDoSteps.isDone ? "line-through" : ""}}>{toDoSteps.text}</span>
        </div>
        </>
    )
};

function ToDoListSteps(){
    const [toDoSteps, setToDoSteps] = useState([{
        title: "Lorem ipsum dolor sit amet",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        isDone: false
    },
    {
        title: "Lorem ipsum dolor sit amet",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        isDone: false
    },
    {
        title: "Lorem ipsum dolor sit amet",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        isDone: false
    },
    {
        title: "Lorem ipsum dolor sit amet",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        isDone: false
    },
    {
        title: "Lorem ipsum dolor sit amet",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        isDone: false
    }]);
    

    const ToggleTodo = index =>{

        const newTodosSteps = [...toDoSteps];
        
        newTodosSteps[index].isDone = !newTodosSteps[index].isDone
        
        setToDoSteps(newTodosSteps);
        
        }

        const [isDone, setIsDone] = useState(false);
        const handleClick = () => {
          setIsDone(true);
        }


        return (
            <div>
                <h2 className="TodoList__title"> Directions </h2>
                <h2 className="TodoList__title--subtitle"> For main dish </h2>
                {toDoSteps.map((toDoSteps, index) => (
          <Card>
            <Card.Body>
              <ToDoSteps
              key={index}
              index={index}
              toDoSteps={toDoSteps}
              ToggleTodo={ToggleTodo}
              />
              <img className="TodoList__horizontalBar" src={horizontalbar} alt="" />
              
            </Card.Body>
          </Card>
          
        ))}
            </div>
        )
}

export default ToDoListSteps;