import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addUser } from '../slice/usersSlice'
/* import { addUser } from '../action' */

export default function AddUserFormComponent() {

    const [formState, setFormState] = useState({ name: '', username: '', password: '', email: '', phone: '', website: '' })
    const dispatch = useDispatch(addUser);
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasic">
                <Form.Label>Full Name</Form.Label>
                <Form.Control name="fullname" value={formState.name} type="text" placeholder="Enter fullname..." onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control name='username' value={formState.username} type="text" placeholder="Enter username..." onChange={(e) => setFormState({ ...formState, username: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' value={formState.email} type="email" placeholder="Enter email..." onChange={(e) => setFormState({ ...formState, email: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' value={formState.password} type="password" placeholder="Enter password..." onChange={(e) => setFormState({ ...formState, password: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control name="phone" value={formState.phone} type="tel" placeholder="Enter phone..." onChange={(e) => setFormState({ ...formState, phone: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicWebsite">
                <Form.Label>Website</Form.Label>
                <Form.Control name='website' value={formState.website} type="url" placeholder="Enter website..." onChange={(e) => setFormState({ ...formState, website: e.target.value })} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={() => dispatch(addUser(formState))}>
                Submit
            </Button>
        </Form>
    )
}
