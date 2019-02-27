import React, { Component } from 'react';
import Form from './components/Form';
import Ad from './components/Ad';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <h1>The Magical Inn registration form</h1>
        <Ad></Ad>
        <Form/>
      </main>
    );
  }
}

export default App;
