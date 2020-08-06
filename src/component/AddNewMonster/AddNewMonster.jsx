import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, FormGroup, Label, Button } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import { addMonster } from './../../redux/monster/monster.actions';
import { connect } from 'react-redux';
function AddNewMonster({ addMonster }) {
    let history = useHistory();
    const [user, setUser] = useState({
        name: '',
        email: '',
        website: '',
        phone: '',
        username: ''
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }
    const handleClear = () => {
        setUser({ name: '', email: '' })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        addMonster({ id: uuidv4(), name, email })
        history.push('/monsters')
    }
    const { name, email, website, phone, username } = user;
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
            <FormGroup>
                <Label htmlFor="email">phone:</Label>
                <Input placeholder='phone' type="phone" name='phone' id='phone' onChange={handleChange} value={phone} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="username">username:</Label>
                <Input placeholder='username' type="text" name='username' id='username' onChange={handleChange} value={username} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="website">website:</Label>
                <Input placeholder='website' type="url" name='website' id='website' onChange={handleChange} value={website} />
            </FormGroup>
            <Button color='primary' type="submit">save</Button> {' '}
            <Button type="button" onClick={handleClear}>clear</Button>
        </Form>
    )

}
export default connect(null, { addMonster })(AddNewMonster)