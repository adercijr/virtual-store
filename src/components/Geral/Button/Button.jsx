import React from 'react'
import './Button.css'

const Button = props => {
    const { href, onClick, size, icon, span, color, border } = props
    return (
        <a className={`Button ${size}`} href={href} onClick={onClick}
            style={{ backgroundColor: `${color}`, border: `${border}`,
                textDecoration: 'none' }}>
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