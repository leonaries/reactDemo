import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import Asider from './components/common/aside'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Asider/>
      </div>
    );
  }
}

export default App;
