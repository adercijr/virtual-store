import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Footer.css'
import NavHeader from '../Geral/NavHeader/NavHeader'
import NavFooter from '../Geral/NavFooter/NavFooter'
import Button from '../Geral/Button/Button'

const Footer = props => {
    return (
        <>
            <footer className="container-fluid bg-white p-0 pb-2 footerDesktop">
                <div className="container p-0 mt-1 d-flex ">
                    <Col>
                        <NavHeader db={'db-footer'} fontSize="0.75em" color="#000" />
                        <span>Copyright © 1999-2020 Ebazar.com.br LTDA.</span>
                        <span>CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 - empresa do grupo Mercado Livre.</span>
                    </Col>
                    <Col sm={4} className="d-flex justify-content-center align-items-center">
                        <Button span="Baixe grátis o app do Mercado Livre!" icon="mobile" size="sm" 
                            color="rgb(255, 230, 0)"/>
                    </Col>
                </div>
            </footer>

            <footer className="footerMobile w-100">                
                    <Row className="footerStrip m-0" >
                        <a href="#" className="footerLink">
                            <div className="footerImg">
                                <img src={require('../../assets/images/logo-mini.png')}></img>
                            </div>
                            <span>Compre e venda com o app!</span>
                        </a>
                        
                    </Row>
                    <Row className="m-0 justify-content-center">
                        <div className="footerItems pt-3 pb-1">
                            <NavFooter db={'db-footer-mobile'} fontSize="0.75em" color="#000" />                        
                        </div>
                    </Row>
                    <hr></hr>
                    <Row className="m-0 justify-content-center">
                        <div className="footerLogin">
                            <Row>
                               <a href="#">Entre</a> 
                               <span style={{padding: '0 5px', fontSize: '0.9em'}}> | </span>  
                               <a href="#">Crie a sua Conta</a> 
                            </Row>
                            <Row>
                               <span className="spanFooter">Copyright © 1999-2020 Ebazar.com.br LTDA.</span>               
                            </Row>   
                        </div>
                    </Row>
            </footer>
        </>
    )
}
export default Footer