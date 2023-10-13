import React from 'react'
import { StyleButton } from './style'
import {MdAddToPhotos} from 'react-icons/md'

const Button = () => {
    return (
        <div>
            <StyleButton>Adicionar Tarefa <MdAddToPhotos size={18}/> </StyleButton>
        </div>
    )
}

export default Button