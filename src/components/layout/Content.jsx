import React from 'react'
import {InputGroup} from 'react-bootstrap'
import Triangle from '../Geral/Triangle/Triangle'

const Content = props => {
    return (
        <div>
            <h1>Content</h1>
            <InputGroup>
                <Triangle direction={'up'} size={'10px'} color={'green'}/>
            </InputGroup>
        </div>
    )
}
export default Content