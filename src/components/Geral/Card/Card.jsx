import React from 'react'
import './Card.css'

const Card = props => {
    return (
        <a href="/" style={{ textDecoration: 'none', color: 'initial' }}>
            <div className="Card">

                <div className="Card-Img">
                    <img src={require('../../../assets/images/Products/TV.jpeg')}></img>
                </div>

                <div className="Card-Price">
                    <strong>R$ 1.299,00</strong>
                    <span>12x R$ 108,32 sem juros</span>
                </div>

                <div className="Card-Description">
                    <span>Smart TV LED 32" HD Samsung 32J4290 com Plataforma Tizen, Wide Color Enhancer Plus, Espelhamento de Tela, Wi-Fi, Dolby Digital Plus, HDMI e USB</span>
                </div>

            </div>
        </a>
    )
}
export default Card