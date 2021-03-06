import React, { useState } from 'react'
import './Cms.css'
import { Container, Tabs, Tab } from 'react-bootstrap'
import Categories from './Categories/Categories'
import NavHeaderCMS from './navHeader/NavHeaderCMS'
import NavHeaderSideCMS from './navHeader/NavHeaderSideCMS'
import NavHeaderSecCMS from './navHeader/NavHeaderSecCMS'
import Images from './Images/Images'

const Cms = props => {

    return (
        <div className="Cms-body">
            <header className="Cms-header">
                <div className="Cms-header-toggle">
                </div>
                <div className="Cms-header-title"><span>ÁREA DO ADMINISTRADOR</span></div>
                <div className="Cms-header-exit"><a href="/">SAIR</a></div>
            </header>


            <Container className="p-3 Cms-main">
                <Tabs defaultActiveKey="Categorias" id="uncontrolled-tab-example" >
                    <Tab eventKey="Categorias" title="Categorias" className="p-2 mt-3">
                        <Categories />
                    </Tab>
                    <Tab eventKey="Navegação Superior" title="Navegação Superior" className="p-2 mt-3">
                        <NavHeaderCMS />
                        <NavHeaderSecCMS />
                        <NavHeaderSideCMS />
                    </Tab>
                    <Tab eventKey="Images" title="Imagens" className="p-2 mt-3">
                        <Images />
                    </Tab>
                    
                </Tabs>
            </Container>
        </div>


    )
}
export default Cms