import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Header.css'
import Input from '../Geral/Input/Input'
import ButtonAddress from '../Geral/ButtonAddress/ButtonAddress'
import NavHeader from '../Geral/NavHeader/NavHeader'
import NavMenuMobile from '../Geral/NavMenuMobile/NavMenuMobile'
import { Link } from 'react-router-dom'
import NavHeaderTitle from '../Geral/NavHeaderTitle/NavHeaderTitle'


const Header = props => {
    const [toggle, handleToggle] = useState(false)

    const [navDB, setnavDB] = useState()

    

    return (
        <>
            <Container fluid style={{ backgroundColor: 'var(--header-color)', padding: 0 }}>
                <Container className="Container-Fluid">
                    <Row className="p-2 Row" >
                        <Col sm={2} className="colLogo">
                            <Link to="/"><div className="headerLogo"></div></Link>
                        </Col>
                        <Col>
                            <Input type={'text'} placeholder={'Buscar produtos, marcas e muito mais...'}
                                icon="fa-search" iconBack="fa-arrow-left" iconClear="fa-times"
                            />
                        </Col>

                        <NavHeaderTitle db="navHeaderAside" />

                        <Col className="Content-Menu-Mobile" xs={1} >
                            <button className="Menu-Mobile" onClick={() => handleToggle(!toggle)}>
                                <i className={`fa ${toggle ? 'fa-times' : 'fa-bars'} fa-lg`}></i>
                            </button>
                        </Col>
                        <Col className="Content-Menu-Mobile" xs={1}>
                            <button className="Menu-Mobile"><i className="fa fa-shopping-cart fa-lg"></i></button>
                        </Col>

                    </Row>
                    <Row className="Row-Header">
                        <div className="pr-2" style={{ width: '150px!important' }}>
                            <ButtonAddress />
                        </div>
                        <Col style={{ padding: 0, display:'flex' }}>
                            <NavHeader db="categories/tree" justify={'justify-start'} />
                            <NavHeader db="navHeaderPrincipal" justify={'justify-start'} />
                        </Col>
                        <Col sm={4}>
                            <NavHeader db="navHeaderSecondary" justify={'justify-around'} />
                        </Col>                     
                    </Row>                   

                </Container>
            </Container>

            {toggle &&
                <NavMenuMobile db="db-menu-mobile" fontSize="0.9em"/>
            }
        </>
    )
}

export default Header