import React, { Component } from 'react';
import { WebSocket } from './com/proximityLabs/aqm/websocket/websocket';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WebSocket />
      </div>
    );
  }
}

export default App;
