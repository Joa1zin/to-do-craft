import React, { useState } from 'react'
import { StyleHeader } from './style'
import {MdAddToPhotos} from 'react-icons/md'
import TodoModal from '../Modal'
import { useDispatch, useSelector } from 'react-redux'
import { searchTodo, updateFilterStatus } from '../../utils/Slice'
import {BiSearchAlt} from 'react-icons/bi'


const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const initialStatus = useSelector((state) => state.todo.filterStatus);

    const [filterStatus, setFilterStatus] = useState(initialStatus);

    const dispatch = useDispatch();

    const updateFilter = (e) => {
        setFilterStatus(e.target.value);
        dispatch(updateFilterStatus(e.target.value));
    };

    const [search, setSearch] = useState('');

    /*const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchTodo(search));
        setSearch('')
    }*/

    return (
        <StyleHeader>
            <button type='button' onClick={() => setModalOpen(true)}>Adicionar Tarefa <MdAddToPhotos size={18}/></button> 
            <form className='search' /*onSubmit={handleSubmit} */>
                <input onChange={(e) => setSearch(e.target.value)} value={search} type='text' placeholder='Procure uma tarefa'/>
                <button type='submit'><BiSearchAlt size={20}/></button>
            </form>
            <select onChange={(e) => updateFilter(e)} value={filterStatus}>
                <option value="all">Todos</option>
                <option value="complete">Completas</option>
                <option value="incomplete">Incompletas</option>        
            </select>
            <TodoModal type='add' modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        </StyleHeader>
    )
}

export default Header