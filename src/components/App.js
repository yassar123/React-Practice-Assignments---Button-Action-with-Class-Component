import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props)
		this.state ={
			message:''
		}
	}
	changeMessage() {
		this.setState({
			message: "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
		})
	}
    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				<button id="click" onClick={() => this.changeMessage()} >click</button>
				<p id="para">{this.state.message}</p>
    		</div>
    	);
    }
}


export default App;

