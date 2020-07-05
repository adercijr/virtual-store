import React, { useState } from 'react'
import { Form, Button, Table, Spinner } from 'react-bootstrap'
import useAxios from 'axios-hooks'
import { baseUrl } from '../../../config'
import axios from 'axios'

const NavHeaderCMS = props => {

    const [{ data, loading, error }, refetch] = useAxios(
        `${baseUrl}/navHeaderPrincipal`
    )

    const [mode, handleMode] = useState('save')

    const [navEditName, handleNavEditName] = useState()    
    const [navEditId, handleNavEditId] = useState()

    const [newNavName, handleNewNavName] = useState()

    const handleEditing = (cat) => {
        handleMode('edit')
        handleNavEditName(cat.name)
        handleNavEditId(cat.id)
    }


    const save = e => {
        e.preventDefault()

        const newNav = {
            name: newNavName
        }

        const editNav = {
            name: navEditName
        }

        if (mode === 'save') {
            axios.post(`${baseUrl}/navHeaderPrincipal`, newNav).then(() => {
                cancelEdit()
                refetch()
            })

        } else {
            axios.put(`${baseUrl}/navHeaderPrincipal/${navEditId}`, editNav).then(() => {
                cancelEdit()
                refetch()
            })
        }
    }

    const delet = (nav) => {
        axios.delete(`${baseUrl}/navHeaderPrincipal/${nav.id}`).then(() => {
            refetch()
        })

    }

    const cancelEdit = () => {
        handleNavEditName('')
        handleNewNavName('')
        handleMode('save')
    }

    
    const handleChangeName = event => {
        if(mode === 'save'){
            handleNewNavName(event.target.value)  
        } else {
            handleNavEditName(event.target.value)
        }
    }

    

    if (loading) return <div style={{ marginTop: '200px' }}><Spinner animation="border" /></div>
    if (error) return <h2><p>Error!</p><Button variant="success" onClick={refetch}>Recarregar</Button></h2>


    return (
        <div className="w-100">
            <Form onSubmit={save}>
                <Form.Group >
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Informe o nome da categoria"
                        value={navEditName ? navEditName : newNavName} onChange={handleChangeName}/>
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
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>

                    {data && data.map(nav => {
                        return (
                            <tr key={nav.id}>
                                <td >{nav.id}</td>
                                <td >{nav.name}</td>
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