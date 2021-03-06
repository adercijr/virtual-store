import React, { useState } from 'react'
import './Input.css'

const Input = props => {

    const [valueInput, handleWriteInput] = useState()

    const handleInput = (event) => {
        handleWriteInput(event.target.value)    
    }

    const handleClear = () => {        
        document.getElementById('onFocus').focus()
        handleWriteInput('')
    }
  
    return (
        <div className="input-icons ">

            <i className={`fa ${props.icon} ${props.icon && 'icon'}`}></i>

            <input id="onFocus" type={props.type} className='Input' placeholder={props.placeholder}
                onChange={e => handleInput(e)} value={valueInput}>
            </input>

            <button className="iconBack">
                <i className={`fa ${props.iconBack}`}></i>
            </button>

            {valueInput && 
                <button className="iconClear" onFocus={() => handleClear()}>
                    <i className={`fa ${props.iconClear}`}></i>
                </button>
            }
        </div>
    )
}
export default Input