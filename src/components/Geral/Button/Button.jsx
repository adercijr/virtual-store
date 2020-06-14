import React from 'react'
import './Button.css'

const Button = props => {
    const { href, onClick, size, icon, span } = props
    return (
        <a className={`Button ${size}`} href={href} onClick={onClick}>
            <div>
                <i className={`fa fa-${icon} fa-2x pr-1`} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {span}
            </div>                        
        </a>
    )
}
export default Button