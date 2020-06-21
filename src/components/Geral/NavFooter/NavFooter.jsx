import React from 'react'
import './NavFooter.css'

const NavFooter = props => {
  
    const menuItems = require(`../../../${props.db}.json`)

    return (
        <div className={`navFooter ${props.justify}`}
            style={{ fontSize: `${props.fontSize}` }}>            
                {menuItems.map(item => {                
                    return (         
                            <div className="footerItem" key={item.id}>
                                <div style={{ width: '100px'}}>
                                    <a style={{ color: `${props.color}` }} href="#">{item.name}</a>
                                </div>
                            </div>   
                                                  
                    )
                })}            
        </div>
        )
}
export default NavFooter
