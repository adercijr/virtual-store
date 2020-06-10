import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Header.css'
import Input from '../Input'

const Header = props => {
    const [toggle, handleToggle] = useState(false)

    return (
        <Container fluid style={{ backgroundColor: "#fff159", padding: 0 }}>
            <Container className="Container-Fluid">
                <Row className="p-2 Row" >
                    <div sm={1}>
                        <a href="#"><div className="logo"></div> </a>
                    </div>
                    <Col>
                        <Input type={'text'} placeholder={'Buscar produtos, marcas e muito mais...'}
                            icon="fa-search" iconBack="fa-arrow-left" iconClear="fa-times"
                        />
                    </Col>

                    <Col sm={4} className="Download-App">
                        <span>Baixe o App gratis do Mercado Livre!</span>
                    </Col>

                    <Col className="Content-Menu-Mobile" xs={1}>
                        <button className="Menu-Mobile" onClick={() => handleToggle(!toggle)}>
                            <i className={`fa ${toggle ? 'fa-times' : 'fa-bars'} fa-lg`}></i>
                        </button>
                    </Col>
                    <Col className="Content-Menu-Mobile" xs={1}>
                        <button className="Menu-Mobile"><i className="fa fa-shopping-cart fa-lg"></i></button>
                    </Col>

                </Row>
                <Row className="p-2 Row-Header">2</Row>
            </Container>
        </Container>
    )
}

export default Header