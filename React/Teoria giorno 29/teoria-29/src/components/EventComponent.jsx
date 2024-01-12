import React, { Component } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'


export default class EventComponent extends Component {

    input1 = React.createRef();
    input2 = React.createRef();

    state = {
        txt: '',
        txt2: '',
        toggle: false
    }

    clickButton = () => {
        this.setState((prevState) => ({toggle: !prevState.toggle}))
    }

    clickButton2() {
        this.setState((prevState) => ({toggle: !prevState.toggle}))
    }

    handleText = (e) => {
        /* console.log(e.target.value) */
        this.setState({txt: e.target.value})
    }

    handleText2 = (e) => {
        /* console.log(e.target.value) */
        this.setState({txt2: e.target.value})
    }

    validateFormRef = () => {
        /* console.log(this.input1.current.value + '-' + this.input2.current.value) */
        this.setState({txt: this.input1.current.value, txt2: this.input2.current.value})
    }

  render() {
    return (
        <>
      <div>EventComponent</div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Control 
        type="text" 
        placeholder="Enter text"
        onChange={this.handleText} 
        />
          <Form.Control 
        type="text" 
        placeholder="Enter text"
        onChange={this.handleText2} 
        />
      </Form.Group>
    </Form>

    <hr/>

    <Form>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Control 
        type="text" 
        placeholder="Enter text" 
        ref={this.input1}
        />
          <Form.Control 
        type="text" 
        placeholder="Enter text"
        ref={this.input2}
        />
        <Button variant="danger" onClick={this.validateFormRef}>Click 1</Button>
      </Form.Group>
    </Form>
      <Button variant="success" onClick={this.clickButton}>Click 1</Button>
      <Button variant="dark" onClick={this.clickButton2.bind(this)}>Click 2</Button>
      {this.state.toggle && <Alert variant={'success'}>
          This is a alert—check it out!
        </Alert>}
      </>
    )
  }
}
