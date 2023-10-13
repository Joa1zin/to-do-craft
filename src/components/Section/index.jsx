import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../Tasks';
import { StyleSection } from './style';

const Content = () => {
    const todoList = useSelector(state => state.todo.todoList);
    const sortedTodoList = [...todoList];
    sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
    return (
        <StyleSection>
            {sortedTodoList && sortedTodoList.length > 0 
            ? sortedTodoList.map((todo) => <Task key={todo.id} todo={todo}/>)
            : 'Nenhuma tarefa encontrada'}
        </StyleSection>
    )
}

export default Content