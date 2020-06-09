import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Header.css'
import Input from '../Input'

const Header = props => {
    const [displaySize, handleDiplaySize] = useState()
    const [toggle, handleToggle] = useState(false)

    const updateDiplaySize = () => {
        handleDiplaySize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", updateDiplaySize);
        return () => window.removeEventListener("resize", updateDiplaySize);
    })

    return (
        <Container fluid style={{ backgroundColor: "#fff159", padding: 0 }}>
            <Container className="Container-Fluid">
                <Row className="p-2 Row" >
                    <div sm={1}>     
                        <a href="#"><div className="logo"></div> </a>                  
                    </div>                    
                    <Col>
                        <Input type={'text'} placeholder={'Buscar produtos.marcas e muito mais...'}
                            icon={displaySize >=1200 && 'fa-search'}
                        />
                    </Col>
                    {displaySize >= 1200 &&
                        <Col sm={4}>
                            <span>Baixe o App gratis do Mercado Livre!</span>
                        </Col>                    
                    }

                    {displaySize <= 1200 &&
                        <>
                            <Col className="Content-Menu-Mobile" xs={1}>
                                <button className="Menu-Mobile" onClick={() => handleToggle(!toggle)}>                                    
                                    <i className={`fa ${toggle ? 'fa-bars' : 'fa-times'} fa-lg`}></i>
                                </button>
                            </Col>
                            <Col className="Content-Menu-Mobile" xs={1}>
                                <button className="Menu-Mobile"><i className="fa fa-shopping-cart fa-lg"></i></button>
                            </Col>
                        </>
                        
                    }


                </Row>
                <Row className="p-2 Row-Header">2</Row>
            </Container>
        </Container>
    )
}

export default Header