import React from 'react'
import CarouselCard from '../Geral/CarouselCard/CarouselCard'
import './Content.css'


const Content = props => {
    return (
        <div className="container p-0 div-Content " >
            <div className="container-content">
                <CarouselCard title="Ofertas" db="db-offers"/>
            </div>
            <div className="container-content">
                <CarouselCard title="Novidades" db="db-offers"/>
            </div>
        </div>
    )
}
export default Content