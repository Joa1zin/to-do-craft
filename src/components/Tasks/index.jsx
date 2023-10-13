import React from 'react'
import { StyleTasks } from './style'
import {BiSolidPencil} from 'react-icons/bi'
import {BiSolidTrashAlt} from 'react-icons/bi'

const Tasks = () => {
    return (
        <StyleTasks>
            <button className='check'>
                <div/>
            </button>
            <p>
                Andre Leodoro comeu minha bundinha 
            </p>
            <div className='bcontainer'>
                <button className='edit'>
                    <BiSolidPencil size={20}/>
                </button>
                <button className='delete'>
                    <BiSolidTrashAlt size={20}/>
                </button>
            </div>
        </StyleTasks>
    )
}

export default Tasks