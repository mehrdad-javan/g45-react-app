import React, { Component } from 'react';
import TestMessage from './TestMessage';

class ComponentLifecycleDemo extends Component {

    state = { name: 'Default Value', display: true };

    componentDidMount(){
        console.log("componentDidMount executed!");        
    }

    componentDidUpdate(){
        console.log("componentDidUpdate executed!");
    }


     
  
    render() {

        return (
            <div className="container">
                <h1>Class Component Lifecycle Demo</h1>
                <h5>Name: {this.state.name} </h5>
                <button type="button" className="btn btn-warning" onClick={() => this.setState({name: 'Test', display: true})} >Update State</button>
                <button type="button" className="btn btn-danger" onClick={() => this.setState({ display: false})} >Click to unmount</button>
                {this.state.display && (<TestMessage />)}
            </div>
        );
    }
}

export default ComponentLifecycleDemo;


//https://www.geeksforgeeks.org/reactjs-componentwillunmount-method/