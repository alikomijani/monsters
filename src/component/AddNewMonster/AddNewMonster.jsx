import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import {Form , Input , FormGroup , Label   , Button} from 'reactstrap';
export default function AddNewMonster() {
    let history = useHistory();
    const [user, setUser] = useState({
        name: '',
        email: ''
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }
    const handleClear = () => {
        // setUser({ name: '', email: '' })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // handleAdd({ ...user, id: 12 });
        history.push('/monsters');
    }
    const { name, email } = user;
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
            <Label htmlFor="name">name:</Label>
            <Input placeholder='Name' type="text" name='name' id='name' onChange={handleChange} value={name} />
            </FormGroup>
            <FormGroup>
            <Label htmlFor="email">email:</Label>
            <Input placeholder='Email' type="email" name='email' id='email' onChange={handleChange} value={email} />
            </FormGroup>
            <Button color='primary' type="submit">save</Button> {' '}
            <Button type="button" onClick={handleClear}>clear</Button>
        </Form>
    )

}
