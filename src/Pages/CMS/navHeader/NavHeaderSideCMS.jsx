import React, { useState } from 'react'
import { Form, Button, Table, Spinner } from 'react-bootstrap'
import useAxios from 'axios-hooks'
import { baseUrl } from '../../../config'
import axios from 'axios'

const NavHeaderCMS = props => {

    const [{ data, loading, error }, refetch] = useAxios(
        `${baseUrl}/navHeaderAside`
    )

    const [mode, handleMode] = useState('save')

    const [navEditSpan, handleNavEditSpan] = useState()    
    const [navEditId, handleNavEditId] = useState()
    const [navEditLink, handleNavEditLink] = useState()
    const [navEditIcon, handleNavEditIcon] = useState()

    const [newNavSpan, handleNewNavSpan] = useState()
    const [newNavLink, handleNewNavLink] = useState()
    const [newNavIcon, handleNewNavIcon] = useState()

    const handleEditing = (cat) => {
        handleMode('edit')
        handleNavEditSpan(cat.span)
        handleNavEditLink(cat.link)
        handleNavEditIcon(cat.icon)
        handleNavEditId(cat.id)
    }


    const save = e => {
        e.preventDefault()

        const newNav = {
            span: newNavSpan,
            link: newNavSpan,
            icon: newNavIcon
        }

        const editNav = {
            span: navEditSpan,
            link: navEditLink,
            icon: navEditIcon
        }

        if (mode === 'save') {
            axios.post(`${baseUrl}/navHeaderAside`, newNav).then(() => {
                cancelEdit()
                refetch()
            })

        } else {
            axios.put(`${baseUrl}/navHeaderAside/${navEditId}`, editNav).then(() => {
                cancelEdit()
                refetch()
            })
        }
    }

    const delet = (nav) => {
        axios.delete(`${baseUrl}/navHeaderAside/${nav.id}`).then(() => {
            refetch()
        })

    }

    const cancelEdit = () => {
        handleNavEditSpan('')
        handleNavEditLink('')
        handleNavEditIcon('')
        handleNewNavSpan('')
        handleNewNavLink('')
        handleNewNavIcon('')
        handleMode('save')
    }

    
    const handleChangeName = event => {
        if(mode === 'save'){
            handleNewNavSpan(event.target.value) 
        } else {
            handleNavEditSpan(event.target.value)
        }        
    }
    const handleChangeLink = event => {
        if(mode === 'save'){
            handleNewNavLink(event.target.value)  
        } else {
            handleNavEditLink(event.target.value)
        }        
    }
    const handleChangeIcon = event => {
        if(mode === 'save'){
            handleNewNavIcon(event.target.value)  
        } else {
            handleNavEditIcon(event.target.value)
        }        
    }

    

    

    if (loading) return <div style={{ marginTop: '200px' }}><Spinner animation="border" /></div>
    if (error) return <h2><p>Error!</p><Button variant="success" onClick={refetch}>Recarregar</Button></h2>


    return (
        <div className="w-100 mt-5">
            <hr className="p-2"></hr>
            <h2>Banner destaque cabeçalho </h2>
            <Form onSubmit={save}>
                <Form.Group >
                    <Form.Label>Span</Form.Label>
                    <Form.Control type="text" placeholder="Informe o span"
                        value={navEditSpan ? navEditSpan : newNavSpan} onChange={handleChangeName}/>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Link</Form.Label>
                    <Form.Control type="text" placeholder="Informe o link"
                        value={navEditLink ? navEditLink : newNavLink} onChange={handleChangeLink}/>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Icon</Form.Label>
                    <Form.Control type="text" placeholder="Informe o ícone"
                        value={navEditIcon ? navEditIcon : newNavIcon} onChange={handleChangeIcon}/>
                </Form.Group>

                
                <Button variant="success" type="submit">
                    Salvar
                </Button>
               
                <Button variant={mode === 'save' ? 'secondary' : 'danger'} 
                    type="reset" className="ml-2" onClick={() => cancelEdit()}>
                        Cancelar
                </Button>           

            </Form>

            <Table striped className="mt-5">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Span</th>
                        <th>Link</th>
                        <th>Icon</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>

                    {data && data.map(nav => {
                        return (
                            <tr key={nav.id}>
                                <td >{nav.id}</td>
                                <td >{nav.span}</td>
                                <td >{nav.link}</td>
                                <td >{nav.icon}</td>
                                <td  >
                                    <Button variant="danger" size="sm" onClick={() => delet(nav)}>
                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                    </Button>
                                    <Button variant="warning" className="ml-2" size="sm" onClick={() => handleEditing(nav)}>
                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </div>
    )
}
export default NavHeaderCMS