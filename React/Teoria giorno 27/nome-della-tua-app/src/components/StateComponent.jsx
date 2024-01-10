import React, { Component } from 'react'

export default class StateComponent extends Component {

    state = {
        counter: 0,
        timer: new Date()
    };

/*     constructor(props) {
        super(props);
        this.state = {
            counter=0;
        };
    }; */

    startTimer = () => {
        // Aggiorno lo stato sovrascrivendo l'oggetto state
        this.setState({ timer: new Date() })
    }

    addCounter = () => {
        // Aggiorno lo stato tenendo conto dello stato precedente
        this.setState((prevState) => ({ counter: prevState.counter + 1 }))
    }

  render() {
    return (
        <>
        <h1>State Component {this.state.counter}</h1>
        <h2>Oggi è il giorno {this.state.timer.toLocaleTimeString()}</h2>

        <button onClick={() => this.addCounter()}>Click</button>
        <button onClick={() => this.startTimer()}>Click</button>
        </>
    )
  }
}
