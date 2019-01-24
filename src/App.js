import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './text_area';
import TextArea from './text_area';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextArea teste={'Ismael e André'}></TextArea>
      </div>
    );
  }
}

export default App;
