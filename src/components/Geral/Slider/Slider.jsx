import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Slider.css'
import img1 from '../../../assets/images/carousel1.jpg'
import img2 from '../../../assets/images/carousel2.jpg'
import img3 from '../../../assets/images/carousel3.jpg'

const Slider = props => {

    return (

        <Carousel interval={3000} className="carousel">
            <Carousel.Item >
                <div className="content">
                    <img className="Img"
                        src={img1}
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className="content">
                    <img className="Img"
                        src={img2}
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className="content">
                    <img className="Img"
                        src={img3}
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>

        </Carousel>

    )
}
export default Slider