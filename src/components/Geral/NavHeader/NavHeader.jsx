import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import './NavHeader.css'
import Triangle from '../Triangle/Triangle'
import { Link } from 'react-router-dom'

const NavHeader = props => {

    const [isHover, handleHover] = useState()
    const [isHoverSub, handleHoverSub] = useState()

    const menuItems = require(`../../../${props.db}.json`)

    return (
        <div className={`nav-component ${props.justify}`}
            style={{ fontSize: `${props.fontSize}` }}>
            {menuItems.map(item => {
                if (item.icon) {
                    return (
                        <Link to={item.iconSpan}>
                            <i className={`${item.icon} ItemIcon`} style={{ color: `${props.color}` }}>
                            </i>
                            <span style={{ fontSize: `${props.fontSize}` }}>{item.iconSpan}</span>
                        </Link>
                    )
                }
                if (item.subMenu) {
                    const show = (id) => {
                        handleHover(id)
                        document.getElementById('content').style.filter = 'brightness(70%)'
                    }
                    const hidden = (id) => {
                        handleHover('')
                        document.getElementById('content').style.filter = 'brightness(100%)'
                    }

                    return (
                        <div onMouseEnter={() => show(item.id)} onMouseLeave={() => hidden(item.id)} key={item.id} id="HEADER">
                            <div className="menuLi" style={{ color: `${props.color}` }}>
                                <Link to={item.name} style={{ color: `${props.color}` }}> {item.name}
                                    <i className="fa fa-angle-down pl-2" aria-hidden="true"></i>
                                </Link>

                                {isHover === item.id &&
                                    <div id={item.id} style={{ position: 'absolute', zIndex: 50, top: '36px', marginLeft: '3px' }}>
                                        <Triangle direction={'up'} size={'8px'} color={'#333'} />
                                    </div>
                                }
                            </div>

                            {isHover === item.id &&
                                <div className="subMenu" id={item.id} >

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
                                                    <Link to={sub.name} key={index} style={{ color: `${props.color}` }}>
                                                        <div className="itemSubMenu">{sub.name}
                                                            <i className="fa fa-angle-right pl-2 text-white-50" aria-hidden="true"></i>
                                                        </div>
                                                    </Link>
                                                    {isHoverSub === sub.id &&
                                                        <div className="subMenuSub">
                                                            <h5>{sub.name}</h5>
                                                            <hr></hr>
                                                            <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '0.9em' }}>
                                                                {sub.subMenu.map(s => {
                                                                    return (
                                                                        <Col sm={5} style={{ margin: '0px 15px 15px 0px', padding: 0 }} key={s.id}>
                                                                            <Link to={s.name} style={{ fontWeight: 'bold' }}>{s.name}</Link>
                                                                            {s.subMenu.map(item => {
                                                                                return (
                                                                                    <div style={{ display: 'flex' }}>
                                                                                        <Link to={item.name} style={{ color: `${props.color}` }}>{item.name}</Link>
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
                                                <Link to={sub.name} key={index} style={{ color: `${props.color}` }}><div className="itemSubMenu">{sub.name}</div></Link>
                                            )
                                        }
                                    })}
                                </div>
                            }
                        </div>
                    )
                } else {
                    return (
                        <div className="menuLi" key={item.id} >
                            <Link to={item.name} style={{ color: `${props.color}` }} >{item.name}</Link>
                        </div>
                    )
                }
            })}
        </div>
    )
}
export default NavHeader
