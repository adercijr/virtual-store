import React from 'react'
import { Carousel } from 'react-bootstrap'
import './SliderHome.css'
import baseUrl from '../../../config'

const SliderHome = props => {

    const Imgs = ["1", "2", "3", "4", "5", "6"]

    return (
        <div className="container-fluid p-0" id="sliderHome" style={{ backgroundColor: 'rgb(235, 233, 233)' }}>
            <div className="containerSlider">
                <Carousel id="carousel" interval={3000} className="carousel">

                    {Imgs.map(item => {
                        return (
                            <Carousel.Item >
                                <div className="content">
                                    <img className="Img"
                                        src={`${baseUrl}/public/carousel/carousel${item}.jpg`}
                                        alt="slide"
                                    />
                                </div>
                            </Carousel.Item>
                        )
                    })}
                    
                </Carousel>
            </div>
        </div>

    )
}
export default SliderHome