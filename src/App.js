import React, { Component } from 'react';
import { Button, ListCard } from './components';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Components</h1>
        </header>
        <div className="component-list">
          <Button href="#" theme='go'> Button </Button>
          <ListCard dash="hyphen"><div>Header</div> <div>List</div>
          </ListCard>
        </div>
      </div>
    );
  }
}

export default App;
