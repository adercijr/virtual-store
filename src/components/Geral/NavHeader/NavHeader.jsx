import React from'react'
import './NavHeader.css'

const NavHeader = props => {    

    const hidden = () => {
        document.getElementById("divToHide").classList.remove('showSubMenuHover')
    }
    const show = () => {
        document.getElementById("divToHide").classList.add('showSubMenuHover')
    }

    const menuItems = [
        {
            name: 'Categoria',
            subMenu: [{ name: 'Veículos' }, { name: 'Tecnologia' }, { name: 'asdas' }, { name: 'asdas' }, { name: 'asdas' }]
        },
        {
            name: 'Ofertas',
        }
    ]

    return (
        <div className="nav-component">
            {menuItems.map(item => {
                if (item.subMenu) {
                    return (
                        <div onMouseEnter={show} onMouseLeave={hidden}>
                            <div key={item.name} className="menuLi">
                                <a href="#">{item.name}
                                    <i className="fa fa-angle-down pl-2" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className="subMenu" id="divToHide">
                                {item.subMenu.map(sub => {
                                    return (
                                        <a href="index.html"><div className="itemSubMenu" key={sub.name}>{sub.name}</div></a>
                                    )
                                })}
                            </div>
                        </div>
                    )
                } else {
                    return <div className="menuLi" key={item.name}><a href="#">{item.name}</a></div>
                }
            })}
        </div>
        // <ul className="nav-component">
        //     {menuItems.map(item => {
        //         if (item.subMenu) {
        //             return (
        //                 <ul key={item.name}>{item.subMenu.map(sub => {
        //                     <li key={sub.name}><a href="#">{sub.name}</a></li>
        //                 })}</ul>
        //             )

        //         } else {
        //             return <li key={item.name}><a href="#">{item.name}</a></li>

        //         }
        //     })}
        // </ul>
    )
}
export default NavHeader