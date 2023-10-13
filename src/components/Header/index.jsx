import React from 'react'
import { StyleHeader } from './style'
import Button from '../Button'
import Search from '../Search'
import Filter from '../Filter'


const Header = () => {
    return (
        <StyleHeader>
            <Button/>
            <Search/>
            <Filter/>
        </StyleHeader>
    )
}

export default Header