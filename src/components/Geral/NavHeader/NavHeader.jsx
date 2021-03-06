import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import './NavHeader.css'
import Triangle from '../Triangle/Triangle'
import { Link } from 'react-router-dom'
import { baseUrl } from '../../../config'
import useAxios from 'axios-hooks'

const NavHeader = props => {

    const [isHover, handleHover] = useState()
    const [isHoverSub, handleHoverSub] = useState()



    const [{ data, loading, error }, refetch] = useAxios(
        `${baseUrl}/${props.db}`
    )




    return (
        <div className={`nav-component ${props.justify}`}
            style={{ fontSize: `${props.fontSize}` }}>
            {data && data.map(item => {
                if (item.icon) {
                    return (
                        <Link to={item.name} className="menuIcon">
                            <i className={`fa fa-${item.icon} fa-lg ItemIcon`} style={{ color: `${props.color}` }}>
                            </i>
                            <span style={{ fontSize: `${props.fontSize}` }}>{item.name}</span>
                        </Link>
                    )
                }
                if (Array.isArray(item.children) && item.children.length) {
                    const show = (id) => {
                        handleHover(id)
                        document.getElementById('content').style.filter = 'brightness(70%)'
                        if (document.getElementById('sliderHome')) {
                            document.getElementById('sliderHome').style.filter = 'brightness(70%)'
                        }
                    }
                    const hidden = (id) => {
                        handleHover('')
                        document.getElementById('content').style.filter = 'brightness(100%)'

                        if (document.getElementById('sliderHome')) {
                            document.getElementById('sliderHome').style.filter = 'brightness(100%)'
                        } 
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
                                <div className="children" id={item.id} >

                                    {item.children.map((sub, index) => {
                                        if (Array.isArray(sub.children) && sub.children.length) {
                                            const showSub = (id) => {
                                                handleHoverSub(id)
                                            }
                                            const hiddenSub = (id) => {
                                                handleHoverSub('')
                                            }
                                            return (
                                                <div onMouseEnter={() => showSub(sub.id)} onMouseLeave={() => hiddenSub(sub.id)} key={sub.id}>
                                                    <Link to={sub.name} key={index} style={{ color: `${props.color}` }}>

                                                        <div className="itemchildren">{sub.name}
                                                            {sub.children !== undefined &&
                                                                <i className="fa fa-angle-right pl-2 text-white-50" aria-hidden="true"></i>
                                                            }
                                                        </div>
                                                    </Link>
                                                    {isHoverSub === sub.id &&
                                                        <div className="childrenSub">
                                                            <h5>{sub.name}</h5>
                                                            <hr></hr>
                                                            <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '0.95em' }}>
                                                                {sub.children.map(s => {
                                                                    return (
                                                                        <Col sm={5} style={{ margin: '0px 15px 15px 0px', padding: 0 }} key={s.id}>
                                                                            <Link to={s.name} style={{ fontWeight: 'bold', color: 'initial', fontSize: '1.1em' }}>{s.name}</Link>
                                                                            {s.children.map(item => {
                                                                                return (
                                                                                    <div style={{ display: 'flex' }}>
                                                                                        <Link to={item.name} className="menuFinal">{item.name}</Link>
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
                                                <Link to={sub.name} key={index} style={{ color: `${props.color}` }}><div className="itemchildren">{sub.name}</div></Link>
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
