import React, { Component } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap';

export default class FormComponent extends Component {

    state = {
        value: '',
        email: ''
    }

    handleSubmit(event) {
        /* event.preventDefault();
        console.log('Test submit') */
    }

    handleChangeEmail = (event) => {
        /* console.log(event.target.value) */
        this.setState({email: event.target.value})
    }

    handleChangeFullname = (event) => {
        /* console.log(event.target.value) */
        this.setState({name: event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state.name + ' - ' + this.state.email)
    }

    render() {
        return (
        <Container>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" value={this.state.fullname} placeholder="Enter fullname" onChange={this.handleChangeFullname} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={this.state.email} placeholder="Enter email" onChange={this.handleChangeEmail} />
                </Form.Group>
                <Button variant="primary" type="button" onClick={this.handleSubmit}>
                    Submit
                </Button>
            </Form>
            {this.state.name && 
             this.state.email &&         // La && non mi restituisce nulla se entrambi i valori sono false Dunque faccio in modo che non mi restituisca nulla se è vuoto
            <Alert variant={'success'}>  
                {this.state.name + ' - ' + this.state.email}
            </Alert>}
        </Container>
        )
    }
    }
