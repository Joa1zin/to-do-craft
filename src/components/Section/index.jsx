import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../Tasks';
import { StyleSection } from './style';

const Content = () => {
    const todoList = useSelector(state => state.todo.todoList);

    const filterStatus = useSelector((state) => state.todo.filterStatus);

    const sortedTodoList = [...todoList];

    sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
    
    const todoFiltered = sortedTodoList.filter(item => {
        if(filterStatus === 'all'){
            return true;
        }
        return item.status === filterStatus;
    })

    return (
        <StyleSection>
            {todoFiltered && todoFiltered.length > 0 
            ? todoFiltered.map((todo) => <Task key={todo.id} todo={todo}/>)
            : 'Nenhuma tarefa encontrada'}
        </StyleSection>
    )
}

export default Content