import React from 'react'
import { StyleSelect } from './style'

const Filter = () => {
    return (
        <div>
            <StyleSelect>
                <option value="">Todos</option>
                <option value="">Completas</option>
                <option value="">Incompletas</option>            
            </StyleSelect>
        </div>
    )
}

export default Filter