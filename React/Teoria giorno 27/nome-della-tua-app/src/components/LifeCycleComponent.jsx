import React, { Component } from 'react'

export default class LifeCycleComponent extends Component {

  state = {
    date: new Date()
  }

  interval = {};

  constructor(props) {
    super(props);
    // Il costruttore viene invocato una sola volta in maniera automatica da React 
    // per creare un componente
    console.log("Sono il costruttore della classe LifeCycleComponent")
  }

  componentDidMount() {
    // Il componentDidMount viene invocato in maniera automatica da React 
    // dopo che il componente è stato creato e inserito nel dom
    console.log("Sono il componentDidMount della classe LifeCycleComponent")
    this.interval = setInterval(() => {
      console.log(new Date())
      this.setState({date: new Date()})
    }, 1000)
  }

  componentDidUpdate() {
    console.log("Sono il componentDidUpdate della classe LifeCycleComponent")
    // Il componentDidUpdate viene invocato in maniera automatica da React 
    // ogni volta che il componente viene aggiornato
  }

  componentWillUnmount() {
    console.log("Sono il componentWillUnmount della classe LifeCycleComponent")
    // Il componentWillUnmount viene invocato in maniera automatica da React una sola volta
    // poco prima che il componente venga distrutto
    clearInterval(this.interval)
  }

  render() {
    console.log("Sono il render della classe LifeCycleComponent")
    return (
      <>
      <div>LifeCycleComponent</div>
      <h1>{this.state.date.toLocaleTimeString()}</h1>
      </>
    )
  }
}
