import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import './NavHeader.css'
import Triangle from '../Triangle/Triangle'

const NavHeader = props => {

    const [isHover, handleHover] = useState()
    const [isHoverSub, handleHoverSub] = useState()

    const menuItems = [
        {
            id: 1,
            name: 'Categoria',
            subMenu: [
                {
                    name: 'Veículos',
                    id: 2,
                    parentId: 1,
                },
                {
                    name: 'Tecnologia',
                    id: 1,
                    parentId: 1,
                    subMenu: [
                        {
                            name: 'Celulares e telefones',
                            id: 1,
                            parentId: 1,
                            subMenu: [
                                {
                                    name: 'Celulares e Smartphones',
                                    id: 1,
                                    parentId: 1
                                },
                                {
                                    name: 'Acessórios para celulares',
                                    id: 1,
                                    parentId: 1
                                },
                            ]
                        },
                        {
                            name: 'Cameras e acessórios',
                            id: 2,
                            parentId: 1,
                            subMenu: [
                                {
                                    name: 'Celulares e Smartphones',
                                    id: 1,
                                    parentId: 1
                                },
                                {
                                    name: 'Acessórios para celulares',
                                    id: 1,
                                    parentId: 1
                                },
                            ]
                        },
                        {
                            name: 'Games',
                            id: 3,
                            parentId: 1,
                            subMenu: [
                                {
                                    name: 'Celulares e Smartphones',
                                    id: 1,
                                    parentId: 1
                                },
                                {
                                    name: 'Acessórios para celulares',
                                    id: 1,
                                    parentId: 1
                                },
                            ]
                        },
                        {
                            name: 'Informática',
                            id: 4,
                            parentId: 1,
                            subMenu: [
                                {
                                    name: 'Celulares e Smartphones',
                                    id: 1,
                                    parentId: 1
                                },
                                {
                                    name: 'Acessórios para celulares',
                                    id: 1,
                                    parentId: 1
                                },
                            ]
                        },
                        {
                            name: 'Eletrônicos, Áudio e Vídeo',
                            id: 5,
                            parentId: 1,
                            subMenu: [
                                {
                                    name: 'Celulares e Smartphones',
                                    id: 1,
                                    parentId: 1
                                },
                                {
                                    name: 'Acessórios para celulares',
                                    id: 1,
                                    parentId: 1
                                },
                            ]
                        }

                    ]
                },
                {
                    name: 'asdas', id: 3,
                    parentId: 1,
                },
                {
                    name: 'asdas', id: 4,
                    parentId: 1,
                    subMenu: [
                        {
                            name: 'variados',
                            id: 1,
                            parentId: 1,
                            subMenu: [
                                {
                                    name: 'variados',
                                    id: 1,
                                    parentId: 1,
                                    subMenu: [
                                        {
                                            name: 'variados',
                                            id: 1,
                                            parentId: 1
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'asdas', id: 5,
                    parentId: 1,
                }, {
                    name: 'Casa e eletrodoméstico',
                    id: 6,
                    parentId: 1,
                    subMenu: [
                        {
                            name: 'Eletrodomésticos',
                            id: 1,
                            parentId: 1,
                            subMenu: [
                                {
                                    name: 'Celulares e Smartphones',
                                    id: 1,
                                    parentId: 1
                                },
                                {
                                    name: 'Acessórios para celulares',
                                    id: 1,
                                    parentId: 1
                                },
                            ]
                        },
                        {
                            name: 'Utilidades domésticas',
                            id: 2,
                            parentId: 1,
                            subMenu: [
                                {
                                    name: 'Celulares e Smartphones',
                                    id: 1,
                                    parentId: 1
                                },
                                {
                                    name: 'Acessórios para celulares',
                                    id: 1,
                                    parentId: 1
                                },
                            ]
                        },
                        {
                            name: 'Games',
                            id: 3,
                            parentId: 1,
                            subMenu: [
                                {
                                    name: 'Celulares e Smartphones',
                                    id: 1,
                                    parentId: 1
                                },
                                {
                                    name: 'Acessórios para celulares',
                                    id: 1,
                                    parentId: 1
                                },
                            ]
                        },
                        {
                            name: 'Informática',
                            id: 4,
                            parentId: 1,
                            subMenu: [
                                {
                                    name: 'Celulares e Smartphones',
                                    id: 1,
                                    parentId: 1
                                },
                                {
                                    name: 'Acessórios para celulares',
                                    id: 1,
                                    parentId: 1
                                },
                            ]
                        },
                        {
                            name: 'Eletrônicos, Áudio e Vídeo',
                            id: 5,
                            parentId: 1,
                            subMenu: [
                                {
                                    name: 'Celulares e Smartphones',
                                    id: 1,
                                    parentId: 1
                                },
                                {
                                    name: 'Acessórios para celulares',
                                    id: 1,
                                    parentId: 1
                                }
                            ]
                        }

                    ]
                },
            ]
        },
        {
            id: 2,
            name: 'Ofertas',
        },
        {
            id: 3,
            name: 'Menus',
            subMenu: [{ name: '123' }, { name: '123' }, { name: '123' }, { name: '123' }, { name: '123' }]
        }
    ]

    return (
        <div className="nav-component">
            {menuItems.map(item => {
                if (item.subMenu) {
                    const show = (id) => {
                        handleHover(id)
                        document.getElementById('content').style.filter = 'grayscale(40%)'
                    }
                    const hidden = (id) => {
                        handleHover('')
                        document.getElementById('content').style.filter = 'grayscale(0%)'
                    }

                    return (
                        <div onMouseEnter={() => show(item.id)} onMouseLeave={() => hidden(item.id)} key={item.id}>
                            <div className="menuLi">
                                <a href="#">{item.name}
                                    <i className="fa fa-angle-down pl-2" aria-hidden="true"></i>
                                </a>

                                {isHover === item.id &&
                                    <div id={item.id} style={{ position: 'absolute', zIndex: 50, top: '36px', marginLeft: '3px' }}>
                                        <Triangle direction={'up'} size={'8px'} color={'#333'} />
                                    </div>
                                }
                            </div>

                            {isHover === item.id &&
                                <div className="subMenu" id={item.id}>

                                    {item.subMenu.map((sub, index) => {
                                        if (sub.subMenu) {
                                            const showSub = (id) => {
                                                handleHoverSub(id)
                                            }
                                            const hiddenSub = (id) => {
                                                handleHoverSub('')
                                            }
                                            return (
                                                <div onMouseEnter={() => showSub(sub.id)} onMouseLeave={() => hiddenSub(sub.id)} key={sub.id}>
                                                    <a href="index.html" key={index}>
                                                        <div className="itemSubMenu">{sub.name}
                                                            <i className="fa fa-angle-right pl-2 text-white-50" aria-hidden="true"></i>
                                                        </div>
                                                    </a>
                                                    {isHoverSub === sub.id &&
                                                        <div className="subMenuSub">
                                                            <h5>{sub.name}</h5>
                                                            <hr></hr>
                                                            <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '0.9rem' }}>
                                                                {sub.subMenu.map(s => {
                                                                    return (
                                                                        <Col sm={5} style={{ margin: '0px 15px 15px 0px', padding: 0 }} key={s.id}>
                                                                            <strong>{s.name}</strong>
                                                                            {s.subMenu.map(item => {
                                                                                return (
                                                                                    <div style={{ display: 'flex' }}>
                                                                                        <a href="/">{item.name}</a>
                                                                                    </div>
                                                                                )

                                                                            })}
                                                                        </Col>

                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <a href="index.html" key={index}><div className="itemSubMenu">{sub.name}</div></a>
                                            )
                                        }
                                    })}
                                </div>
                            }
                        </div>
                    )
                } else {
                    return <div className="menuLi" key={item.id}><a href="#">{item.name}</a></div>
                }
            })}
        </div>
    )
}
export default NavHeader
