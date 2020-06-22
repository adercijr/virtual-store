import React, { Component } from "react";
import Slider from "react-slick";
import './CarouselCard.css'
import Card from '../Card/Card'


const CarouselCard = props => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  }

  return (
    <div className="ContainerApp">
      <div>
        <span style={{ fontSize: '2em', marginRight: '20px'}}>Ofertas</span>
        <a href='/' style={{ textDecoration: 'none' }}>Ver todas</a>
      </div>
      <Slider {...settings}>
        <div className="CardCarousel">
          <Card />
        </div>
        <div className="CardCarousel">
          <Card />
        </div>
        <div className="CardCarousel">
          <Card />
        </div>
        <div className="CardCarousel">
          <Card />
        </div>
        <div className="CardCarousel">
          <Card />
        </div>
        <div className="CardCarousel">
          <Card />
        </div>
        <div className="CardCarousel">
          <Card />
        </div>
        <div className="CardCarousel">
          <Card />
        </div>
        <div className="CardCarousel">
          <Card />
        </div>
      </Slider>
    </div>
  )
}


export default CarouselCard