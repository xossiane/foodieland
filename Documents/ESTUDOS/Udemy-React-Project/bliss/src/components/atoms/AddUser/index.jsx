import React from 'react';
import { useState } from 'react';
import Button from '../../Button'

function AddUser(props) {
    const [enterUsername, setEnterUsername] = useState('');
    const [enterAge, setEnterAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
            return( 
                alert("Please, let me know you"))

        } if (enterAge < 1) {
        return (
            alert("Please, enter a valid age")
        )}

        props.onAddUser(enterUsername, enterAge);
        setEnterUsername('');
        setEnterAge('');   
        
    };
    
    const usernameChangeHandler = (event) => {
        setEnterUsername(event.target.value);
    };

    const userAgeChangeHandler = (event) => {
        setEnterAge(event.target.value);
    };

    return (
    <form className= "App-header__form"onSubmit={addUserHandler}>
        <label htmlFor = "username">Username:</label>
        <input className = "App-header__form--input" id = "username" type="text" placeholder="your name" value={enterUsername} onChange={usernameChangeHandler}/> 
        <br></br>
        <label htmlFor = "age">Age in years, please:</label>
        <input className = "App-header__form--input" id = "age" type="number" placeholder="age" value={enterAge} onChange={userAgeChangeHandler}/> 
        <Button type="submit" onClick={AddUser}>Add User</Button>
    </form>
    );
};

export default AddUser;