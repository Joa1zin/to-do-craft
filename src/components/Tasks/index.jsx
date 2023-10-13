import React from 'react'
import { StyleTask } from './style'


const Task = ({todo}) => {
    return (
        <StyleTask>
            <div>
                []
                <div>
                    <p>
                        {todo.title}
                    </p>
                    <p>
                        {todo.time}
                    </p>
                </div>
            </div>
        </StyleTask>
    )
}

export default Task