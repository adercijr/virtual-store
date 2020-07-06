import React, { useState } from 'react'
import { Form, Button, Table, Spinner } from 'react-bootstrap'
import useAxios from 'axios-hooks'
import { baseUrl } from '../../../config'
import axios from 'axios'

const Categories = props => {

    const [{ data, loading, error }, refetch] = useAxios(
        `${baseUrl}/categories`
    )

    const [mode, handleMode] = useState('save')

    const [categoryEditName, handleCategoryEditName] = useState()
    const [categoryEditParent, handleCategoryEditParent] = useState()
    const [categoryEditId, handleCategoryEditId] = useState()

    const [newCategoryName, handleNewCategoryName] = useState()
    const [newCategoryParent, handleNewCategoryParent] = useState()

    const handleEditing = (cat) => {
        handleMode('edit')
        handleCategoryEditName(cat.name)
        handleCategoryEditParent(cat.parentId)
        handleCategoryEditId(cat.id)
    }


    const save = e => {
        e.preventDefault()

        const newCat = {
            name: newCategoryName,
            parentId: newCategoryParent
        }

        const editCat = {
            name: categoryEditName, 
            parentId: categoryEditParent
        }

        if (mode === 'save') {
            axios.post(`${baseUrl}/categories`, newCat).then(() => {
                cancelEdit()
                refetch()
            })

        } else {
            axios.put(`${baseUrl}/categories/${categoryEditId}`, editCat).then(() => {
                cancelEdit()
                refetch()
            })
        }
    }

    const delet = (cat) => {
        axios.delete(`${baseUrl}/categories/${cat.id}`).then(() => {
            refetch()
        })

    }

    const cancelEdit = () => {
        handleCategoryEditName('')
        handleCategoryEditParent('')
        handleNewCategoryName('')
        handleNewCategoryParent('')
        handleMode('save')
    }

    
    const handleChangeName = event => {
        if(mode === 'save'){
            handleNewCategoryName(event.target.value)  
        } else {
            handleCategoryEditName(event.target.value)
        }
    }

    const handleChangeParent = event => {   
        if(mode === 'save'){
            handleNewCategoryParent(event.target.value)         
        } else {
            handleCategoryEditParent(event.target.value)
        }
 
    }

    if (loading) return <div style={{ marginTop: '200px' }}><Spinner animation="border" /></div>
    if (error) return <h2><p>Error!</p><Button variant="success" onClick={refetch}>Recarregar</Button></h2>


    return (
        <div className="w-100">
            <Form onSubmit={save}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Informe o nome da categoria"
                        value={categoryEditName ? categoryEditName : newCategoryName} onChange={handleChangeName}/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Caminho</Form.Label>
                    <Form.Control as="select" onClick={handleChangeParent}>
                        <option label="Selecione o caminho da categoria"></option>
                        {data && data.map(cat => {
                             return <option selected={categoryEditParent && cat.id === categoryEditParent ? true : false}
                                value={cat.id}>{cat.path}</option>
                        })}
                    </Form.Control>
                </Form.Group>


                <Button variant="success" type="submit">
                    Salvar
                </Button>
               
                <Button variant={mode === 'save' ? 'secondary' : 'danger'} 
                    type="reset" className="ml-2" onClick={() => cancelEdit()}>
                        Cancelar
                </Button>
              

            </Form>



            <Table striped className="mt-5" size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Caminho</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>

                    {data && data.map(cat => {
                        return (
                            <tr key={cat.id}>
                                <td >{cat.id}</td>
                                <td >{cat.name}</td>
                                <td >{cat.path}</td>
                                <td  >
                                    <Button variant="danger" size="sm" onClick={() => delet(cat)}>
                                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                                    </Button>
                                    <Button variant="warning" className="ml-2" size="sm" onClick={() => handleEditing(cat)}>
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
export default Categories