import React, { useState } from 'react'
import { StyleTask } from './style'
import {MdEdit} from 'react-icons/md'
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../utils/Slice'
import toast from 'react-hot-toast'
import TodoModal from '../Modal'

const Task = ({todo}) => {
    const dispatch = useDispatch();
    const [editModalOpen, setEditModalOpen] = useState(false);

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(todo.id));
        toast.success('Tarefa Deletada')
    }
    const handleEditTodo = () => {
        setEditModalOpen(true)
    }

    return (
        <>
            <StyleTask>
                <div className='container-check-text'>
                    []
                    <div className='container-text-date'>
                        <p className='title-text'>
                            {todo.title}
                        </p>
                        <p className='date-text'>
                            {todo.time}
                        </p>
                    </div>
                </div>
                <div className='container-icons' >
                    <div className='icon' onClick={handleEditTodo} role='button' tabIndex={0}>
                        <MdEdit size={25}/>
                    </div>
                    <div className='icon' onClick={handleDeleteTodo} role='button' tabIndex={0}>
                        <MdDelete size={25}/>
                    </div>
                </div>
            </StyleTask>
            <TodoModal todo={todo} type="update" modalOpen={editModalOpen} setModalOpen={setEditModalOpen}/>
        </>
    )
}

export default Task