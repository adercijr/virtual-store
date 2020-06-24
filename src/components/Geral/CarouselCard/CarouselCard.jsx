import React, { Component } from "react";
import Slider from "react-slick";
import './CarouselCard.css'
import Card from '../Card/Card'


const CarouselCard = props => {

  const db = require(`../../../${props.db}.json`)

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipeToSlide: false,
    touchMove: false,
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
          slidesToScroll: 1,
          initialSlide: 1,
          touchMove: true,
        }
      }
    ]
  }

  return (
    <div className="container-content">
      <div className="Container-carousel-card">
        <div>
          <span style={{ fontSize: '2em', marginRight: '20px', marginLeft: '10px' }}>{props.title}</span>
          <a href='/' style={{ textDecoration: 'none' }}>Ver todas</a>
        </div>
        <Slider {...settings}>

          {db.map(card => {
            return (
              <div className="CardCarousel" key={card.id}>
                <Card {...card} />
              </div>
            )
          })
          }
        </Slider>
      </div>
    </div>
  )
}


export default CarouselCard