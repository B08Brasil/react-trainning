import React, { Component } from 'react';
import Header from './shared/header/Header';
import Content from './shared/content/Content';

class App extends Component{
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    }

    render(){
        return (
        <div> 
            <Header> </Header>
            <Content></Content>
        </div>
        );
    }
}

export default App;

