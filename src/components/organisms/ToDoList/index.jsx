import { useState } from "react";
import './ToDoList.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form } from 'react-bootstrap';

function ToDo({ toDo, index, markToDo, removeToDo }) {
    return (
      <div
        className="todo">
        <span style={{ textDecoration: toDo.isDone ? "line-through" : "" }}>{toDo.text}</span>
        <div>
          <Button variant="outline-success" onClick={() => markToDo(index)}>✓</Button>{' '}
          <Button variant="outline-danger" onClick={() => removeToDo(index)}>✕</Button>
        </div>
      </div>
    );
  }
  
  function FormTodo({ addToDo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addToDo(value);
      setValue("");
    };
  
    return (
      <Form onSubmit={handleSubmit}> 
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
    );
  }

  
function ToDoList(){
    const [toDo, setToDo] = useState([{
        text: "Lorem ipsum dolor sit amet",
        isDone: false
    },
    {
        text: "Lorem ipsum dolor sit amet",
        isDone: false
    },
    {
        text: "Lorem ipsum dolor sit amet",
        isDone: false
    }]);

    /* adiciona uma nova tarefa */
    const addToDo = text => {
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
        
        <div>
        {toDo.map((toDo, index) => (
          <Card>
            <Card.Body>
              <ToDo
              key={index}
              index={index}
              toDo={toDo}
              markToDo={markToDo}
              removeToDo={removeToDo}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    
    )
    
}

export default ToDoList;