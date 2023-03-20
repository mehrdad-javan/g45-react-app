import React, { Component } from 'react';

class TestMessage extends Component {

    componentWillUnmount(){
        console.log("componentWillUnmount executed!");
    }



    render() {
        return (<h5>Test Message Component!</h5>);
    }
}

export default TestMessage;