import React from 'react'
import './NavHeaderTitle.css'
import { Col } from 'react-bootstrap'
import useAxios from 'axios-hooks'
import { baseUrl } from '../../../config'

const NavHeaderTitle = props => {

    const [{ data, loading, error }, refetch] = useAxios(
        `${baseUrl}/${props.db}`
    )

    return (

        <Col sm={4} className="Download-App">

            {data && data.map(nav => {
                return (
                    <a href={nav.link}>
                        <i className={`fa fa-${nav.icon} fa-2x mr-2`} aria-hidden="true"></i>
                        <span>{nav.span}</span>
                    </a>
                )
            })}
        </Col>
    )
}

export default NavHeaderTitle