import React, {useState} from 'react'
import { StyleModal } from './style'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../utils/Slice';
import toast from 'react-hot-toast';



const TodoModal = ({modalOpen, setModalOpen}) => {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('incompleto');
    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(title && status){
            dispatch(addTodo({
                id: crypto.randomUUID(),
                title,
                status,
                time: new Date().toLocaleString(),
            }))
            toast.success('Tarefa Adicionada com Sucesso');
            setModalOpen(false);
        }else{
            toast.error("O título não pode estar vazio")
        }
        
    }

    return (
    modalOpen && (
        <StyleModal>
            <div className='container'>
                <form className='form' onSubmit={(e) => handleSubmit(e)}>
                    <h1 className='formTitle'>Adicionar Tarefa</h1>
                    <label htmlFor="title">
                        title
                        <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </label>
                    <label htmlFor="status">
                        Status
                        <select name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="incomplete">Incompleto</option>
                            <option value="complete">Completo</option>
                        </select>
                    </label>
                    <div className='buttonContainer'>
                        <button type='submit'>
                            Adicionar
                        </button>
                        <button type='button' onClick={() => setModalOpen(false)}>
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