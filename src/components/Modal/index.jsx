import React, {useState, useEffect} from 'react'
import { StyleModal } from './style'
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../../utils/Slice';
import toast from 'react-hot-toast';
import {v4} from 'uuid'



const TodoModal = ({type, modalOpen, setModalOpen, todo}) => {
    const [title, setTitle] = useState('');

    const [status, setStatus] = useState('incomplete');

    const dispatch = useDispatch()
    
    useEffect(() => {
        if(type === 'update' && todo){
            setTitle(todo.title);
            setStatus(todo.status);
        }else{
            setTitle('');
            setStatus('incomplete');
        }
    }, [type, todo, modalOpen]);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(title === ''){
            toast.error('Por favor insira um título');
            return;
        }
        if(title && status){
            if(type === 'add'){
                dispatch(addTodo({
                    id: v4(),
                    title,
                    status,
                    time: new Date().toLocaleString(),
                }));
                toast.success('Tarefa adicionada com sucesso');
                setTitle('');
            };
            if(type === 'update'){
                if(todo.title !== title || todo.status !== status){
                    dispatch(updateTodo({
                        ...todo,
                        title,
                        status,
                    }));
                    toast.success('Tarefa atualizada com sucesso')
                }else{
                    toast.error('Nenhuma mudança realizada')
                }
            };
            setModalOpen(false);
        }
        
    }

    return (
    modalOpen && (
        <StyleModal>
            <div className='container'>
                <form className='form' onSubmit={(e) => handleSubmit(e)}>
                    <h1 className='formTitle'>{type === 'update' 
                    ? 'Editar'
                    : 'Adicionar'} Tarefa</h1>
                    <label htmlFor="title">
                        Título
                        <input className='title-input' placeholder='Insira o título da tarefa' type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </label>
                    <label htmlFor="status">
                        Status
                        <select className='select' name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="incomplete">Incompleto</option>
                            <option value="complete">Completo</option>
                        </select>
                    </label>
                    <div className='buttonContainer'>
                        <button className='btn-add' type='submit'>
                        {type === 'add' 
                    ? 'Adicionar'
                    : 'Editar'}
                        </button>
                        <button className='btn-cancel' type='button' onClick={(e) => {
                            setModalOpen(false)
                            setTitle('')
                            }}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </StyleModal>
        )  
    );
}

export default TodoModal