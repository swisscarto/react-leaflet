import React, { Component } from 'react';
import './App.css';
import LeafletMap from './LeafletMap/LeafletMap';

class App extends Component {
  render(){
    return (
      <div className="App">
        <LeafletMap />
      </div>
    )
  }
}

export default App;
