import React from 'react'
import Content from '../layout/Content'
import SliderHome from '../Geral/SliderHome/SliderHome'

const Home = props => {
    return (
        <div id="content" className="container-fluid containerApp">
            <SliderHome />
            <Content />
        </div>
    )
}
export default Home