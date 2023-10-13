import React, { useState } from 'react'
import { StyleHeader } from './style'
import {MdAddToPhotos} from 'react-icons/md'


import TodoModal from '../Modal'



const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <StyleHeader>
            <button type='button' onClick={() => setModalOpen(true)}>Adicionar Tarefa <MdAddToPhotos size={18}/></button> 
            <input placeholder='Procure uma tarefa'/>
            <select>
                <option value="">Todos</option>
                <option value="">Completas</option>
                <option value="">Incompletas</option>        
            </select>
            <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        </StyleHeader>
    )
}

export default Header