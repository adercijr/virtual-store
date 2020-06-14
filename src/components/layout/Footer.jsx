import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Footer.css'
import NavHeader from '../Geral/NavHeader/NavHeader'
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
                    <Col sm={3} className="d-flex justify-content-center align-items-center">
                        <Button span="Baixe grátis o app do Mercado Livre!" icon="mobile" size="sm" />
                    </Col>
                </div>
            </footer>

            <footer className="container-fluid bg-white p-0 pb-2 footerMobile">
                <div className="container p-0 mt-1 d-flex">
                    <Row>
                        
                    </Row>
                    <Row sm={3} className="d-flex justify-content-center align-items-center">

                    </Row>
                </div>
            </footer>
        </>
    )
}
export default Footer