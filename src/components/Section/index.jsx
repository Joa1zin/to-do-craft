import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../Tasks';

const Content = () => {
    const todoList = useSelector(state => state.todo.todoList);
    const sortedTodoList = [...todoList];
    sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
    return (
        <div>
            {sortedTodoList && sortedTodoList.length > 0 
            ? sortedTodoList.map((todo) => <Task key={todo.id} todo={todo}/>)
            : 'Nenhuma tarefa encontrada'}
        </div>
    )
}

export default Content