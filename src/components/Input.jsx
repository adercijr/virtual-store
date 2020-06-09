import React from 'react'
import './Input.css'

const Input = props => {
    return (
        <div className="input-icons ">
            <i className={`fa ${props.icon} ${props.icon && 'icon'}`}></i>
            <input type={props.type} className='Input' placeholder={props.placeholder}>
            </input>
        </div>
    )
}
export default Input