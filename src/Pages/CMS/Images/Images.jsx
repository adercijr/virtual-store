import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Images.css'
import axios from 'axios'
import baseUrl from '../../../config'
import Popup from "reactjs-popup";


const Images = props => {
    const [modalShow, setModalShow] = useState(false);

    const [selectedLogo, handleSelectLogo] = useState(null)
    const [selectedLogoMini, handleSelectLogoMini] = useState(null)

    const [ImgCarousel, handleCarousel] = useState(null)
    const [selectedImgCarousel, handleSelectCarousel] = useState(null)

    const uploadFiles1 = () => {
        const data = new FormData()

        data.append('file', selectedLogo)
        axios.post(`${baseUrl}/upload`, data, {
            // receive two    parameter endpoint url ,form data
        })
            .then(res => { // then print response status
                console.log(res.statusText)
            })
    }
    const uploadFiles2 = () => {
        const data = new FormData()

        data.append('file2', selectedLogoMini)
        axios.post(`${baseUrl}/upload2`, data, {
            // receive two    parameter endpoint url ,form data
        })
            .then(res => { // then print response status
                console.log(res.statusText)
            })
    }

    const uploadImgCarousel = () => {
        const data = new FormData()
        const file = 'file' + selectedImgCarousel
        data.append(file, ImgCarousel)
        axios.post(`${baseUrl}/uploadCarousel${selectedImgCarousel}`, data, {
            // receive two    parameter endpoint url ,form data
        })
            .then(res => { // then print response status
                console.log(res.statusText)
            })
    }

    const setCarouselItem = e => {
        handleCarousel(e.target.files[0])
        handleSelectCarousel(e.target.id)
        console.log(e.target.id)
    }

    const CarouselLength = ['1', '2', '3', '4', '5', '6']

    const handleClick = e => {
        setModalShow(e.target.id)
    }

    return (

        <div>
            <h2>Logos</h2>
            <Form>
                <Form.Group controlId="formImageLogo">
                    <Form.Label>Logo</Form.Label>

                    <div className="divForm">
                        <div className="previewLogo mr-3">
                            <img src={`${baseUrl}/public/logo/logo.png`}>
                            </img>
                        </div>
                        <Form.Control type="file" className="inputFile" name="file" accept='image/png'
                            onChange={event => handleSelectLogo(event.target.files[0])} />
                    </div>
                    {selectedLogo &&
                        <div className="mt-2">
                            <Button variant="success" size="sm" type="submit" onClick={uploadFiles1}>
                                <i className="fa fa-check" aria-hidden="true"></i>
                            </Button>
                            <Button variant="secondary" size="sm" className="ml-2"
                                onClick={() => handleSelectLogo(null)}>Cancelar</Button>
                        </div>
                    }
                </Form.Group>
                <Form.Group controlId="formImageLogoMini">
                    <Form.Label>Mini Logo</Form.Label>
                    <div className="divForm">
                        <div className="previewLogo mr-3">
                            <img src={`${baseUrl}/public/logo/logo-mini.png`}>
                            </img>
                        </div>
                        <Form.Control type="file" className="inputFile" name="file2" accept='image/png'
                            onChange={event => handleSelectLogoMini(event)} />
                    </div>
                    {selectedLogoMini &&
                        <div className="mt-2">
                            <Button variant="success" size="sm" type="submit" onClick={uploadFiles2}>
                                <i className="fa fa-check" aria-hidden="true"></i>
                            </Button>
                            <Button variant="secondary" size="sm" className="ml-2"
                                onClick={() => handleSelectLogoMini(null)}>Cancelar</Button>
                        </div>
                    }
                </Form.Group>
            </Form>
            <small>* Apenas imagens em formato PNG</small>

            <hr />
            <h2>Imagens Carrosel</h2>


            <Form>

                {CarouselLength.map(item => {
                    return (
                        <Form.Group controlId="formImageCarousel" key={item}>
                            <Form.Label>Imagem {item}</Form.Label>

                            <div className="divForm">
                                <div className="previewLogoCarousel mr-3" >
                                    <img src={`${baseUrl}/public/carousel/carousel${item}.jpg`} id={item} onClick={e => handleClick(e)}>
                                    </img>
                                </div>
                                <Form.Control type="file" className="inputFile" name={`file${item}`} id={item} accept='image/*'
                                    onChange={event => setCarouselItem(event)} />
                            </div>
                            {ImgCarousel && selectedImgCarousel === item &&
                                <div className="mt-2">
                                    <Button variant="success" size="sm" type="submit"
                                        onClick={e => uploadImgCarousel(e)}>
                                        <i className="fa fa-check" aria-hidden="true"></i>
                                    </Button>
                                    <Button variant="secondary" size="sm" className="ml-2"
                                        onClick={() => handleCarousel(null)}>Cancelar</Button>
                                </div>
                            }
                            {modalShow === item &&
                                <Popup open={modalShow} position="right center" contentStyle={{ width: '90%' }}>
                                    <img src={`${baseUrl}/public/carousel/carousel${item}.jpg`} className="imgModal"></img>

                                </Popup>
                            }

                        </Form.Group>
                    )

                })}


            </Form>
        </div>
    )
}
export default Images