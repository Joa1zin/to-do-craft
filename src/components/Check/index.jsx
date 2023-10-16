import React from 'react'
import { StyleCheck } from './style';


const Check = ({checked, handleCheck}) => {
    return (
        <StyleCheck>
            <input type="checkbox" onChange={(handleCheck)}/>
        </StyleCheck>
    )
}

export default Check;