import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Images.css'
import axios from 'axios'
import baseUrl from '../../../config'


const Images = props => {

    const [selectedLogo, handleSelectLogo] = useState(null)
    const [selectedLogoMini, handleSelectLogoMini] = useState(null)

    const [selectedImgCarousel, handleCarousel] = useState(null)
    
    const uploadFiles1 = () => {
        const data = new FormData()

        data.append('file', selectedLogo)
        axios.post("http://localhost:3001/upload", data, {
            // receive two    parameter endpoint url ,form data
        })
            .then(res => { // then print response status
                console.log(res.statusText)
            })
    }
    const uploadFiles2 = () => {
        const data = new FormData()

        data.append('file2', selectedLogoMini)
        axios.post("http://localhost:3001/upload2", data, {
            // receive two    parameter endpoint url ,form data
        })
            .then(res => { // then print response status
                console.log(res.statusText)
            })
    }

    const uploadImgCarousel = () => {
        const data = new FormData()

        data.append('file', selectedImgCarousel)
        axios.post("http://localhost:3001/uploadCarousel", data, {
            // receive two    parameter endpoint url ,form data
        })
            .then(res => { // then print response status
                console.log(res.statusText)
            })
    }

    const CarouselLength = ['1', '2', '3', '4', '5', '6']

    return (

        <div>
            <h2>Logos</h2>
            <Form>
                <Form.Group controlId="formImageLogo">
                    <Form.Label>Logo</Form.Label>

                    <div className="divForm">
                        <div className="previewLogo mr-3">
                            <img src={'http://localhost:3001/public/logo/logo.png'}>
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
                            <img src={'http://localhost:3001/public/logo/logo-mini.png'}>
                            </img>
                        </div>
                        <Form.Control type="file" className="inputFile" name="file2" accept='image/png'
                            onChange={event => handleSelectLogoMini(event.target.files[0])} />
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
                <Form.Group controlId="formImageCarousel">
                    <Form.Label>Imagem 1</Form.Label>

                    <div className="divForm">
                        <div className="previewLogo mr-3">
                            <img src={'http://localhost:3001/public/logo/logo.png'}>
                            </img>
                        </div>
                        <Form.Control type="file" className="inputFile" name="file" accept='image/*'
                            onChange={event => handleCarousel(event.target.files[0])} />
                    </div>
                    {selectedLogo &&
                        <div className="mt-2">
                            <Button variant="success" size="sm" type="submit" onClick={uploadImgCarousel}>
                                <i className="fa fa-check" aria-hidden="true"></i>
                            </Button>
                            <Button variant="secondary" size="sm" className="ml-2"
                                onClick={() => handleCarousel(null)}>Cancelar</Button>
                        </div>
                    }
                </Form.Group>
                
            </Form>
        </div>
    )
}
export default Images