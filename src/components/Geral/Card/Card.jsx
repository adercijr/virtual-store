import React from 'react'
import './Card.css'

const Card = props => {

    const { price, newPrice, img, description } = props
    const discount = (newPrice / price * 100) - 100

    return (
        <a href="/" style={{ textDecoration: 'none', color: 'initial' }}>
            <div className="Card">

                <div className="Card-Img">
                    <img src={require(`../../../assets/images/Products/${img}`)}></img>
                </div>

                <div className="Card-Price">
                    <div className="Card-old-price">
                        <span>{price.toFixed(2).replace('.',',')}</span>
                    </div>
                    <div className="Card-discount">
                        <strong>R$ {(newPrice.toFixed(2).replace('.', ','))}</strong>
                        <span>{parseInt(discount)}%</span>
                    </div>
                    <span>12x R$ {(newPrice / 12).toFixed(2).replace('.', ',')} sem juros</span>

                </div>

                <div className="Card-Description">
                    <span>{description}</span>
                </div>

            </div>
        </a>
    )
}
export default Card