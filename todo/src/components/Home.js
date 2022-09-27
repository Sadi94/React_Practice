/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid"
import Todos from './Todos'
import style from './home.module.css'
import NewTodo from './NewTodo';


// const dummyTodos = [
//     {
//         id: 1,
//         title: "Todo Title 1 ",
//         desc: "todo1 description here..."
//     },
//     {
//         id: 2,
//         title: "Todo Title 2 ",
//         desc: "todo2 description here..."
//     },
// ];


//export 
const Home = () => {

    const [todos, setTodos] = useState([]);


    const handleAddTodo = (todo) => {
        //console.log(todo);

        setTodos((prevTodos) => {
            return [...prevTodos, { id: uuidv4(), todo }]
        });
        //console.log(todos);
    };

    const handleRemoveTodo = (id) => {
        //alert(id)
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos)

        // setTodos((prevTodos) => {
        //     const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
        // });

        return filteredTodos;
    }
    return (
        <div className={style.container}>
            <h1 style={{ color: "white" }}>Todo App</h1>
            <NewTodo onAddTodo={handleAddTodo} />
            <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
        </div>
    );
};
export default Home;
