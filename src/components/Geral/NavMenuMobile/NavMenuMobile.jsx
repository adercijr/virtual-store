import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import './NavMenuMobile.css'

const NavMenuMobile = props => {

    const menuItems = require(`../../../${props.db}.json`)

    return (
        <Container className="p-0 menu-mobile bg-white">
            <Row className="m-0 w-100 p-3 row-content-menu-mobile">
                <div className="col-content-menu-mobile">
                    <img src={require('../../../assets/images/user-default.jpg')} />
                </div>
                <div className="col-menu-mobile-user pl-3">
                    <div>
                        <strong>Bem-vindo</strong>
                    </div>
                    <div>
                        <span>Entre na sua conta para ver suas compras, vender e mais.</span>
                    </div>
                </div>
            </Row>
            <Row className="m-0 w-100 p-3 justify-content-center">
                <div className="row-menu-mobile-button-user">
                    <div style={{ width: '145px' }}>
                        <Button block >Entre</Button>
                    </div>
                    <div style={{ width: '145px' }}>
                        <Button variant="outline-primary" block>Crie a sua conta</Button>
                    </div>
                </div>
            </Row>
            <hr></hr>
            <div className="m-0 w-100 p-2 d-flex justify-content-center">
                <div className="content-items-menu-mobile">
                    {menuItems.map(item => {
                        if (item.icon) {
                            return (
                                <a href="/">
                                    <Row className="m-0 w-100 p-3">
                                        <div className="icon-item-minu-mobile">
                                            <i className={`${item.icon} ItemIcon`} style={{ color: `${props.color}` }}>
                                            </i>
                                        </div>
                                        <div className="span-item-minu-mobile">
                                            <span style={{ fontSize: `${props.fontSize}` }}>{item.iconSpan}</span>
                                        </div>
                                    </Row>
                                </a>
                            )
                        }
                    })}
                </div>
            </div>
            <hr></hr>
            <div className="m-0 w-100 p-2 d-flex justify-content-center">
                <div className="content-items-menu-mobile">
                    <a href="/">
                        <Row className="m-0 w-100 p-3">
                            <div className="icon-item-minu-mobile">
                                <i className={`fa fa-download ItemIcon`} />
                            </div>
                            <div className="span-item-minu-mobile">
                                <span>Compre e venda com o app!</span>
                            </div>
                        </Row>
                    </a>
                </div>
            </div>
        </Container >
    )
}
export default NavMenuMobile