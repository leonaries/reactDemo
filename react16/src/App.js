import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import NameCard from  './components/NameCard'
// import LikesButton from './components/LikesButton'
// import DigitalClock from './components/DigitalClokc'
import CommentBox from './components/CommentBox'
// const tags = ['恐龙','足球小子']
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>{/*
        <NameCard name='viking' number = {1324567890} isHuman tags = {tags}/>
          <LikesButton/>
          <DigitalClock/>*/}
          <CommentBox/>
      </div>
    );
  }
}

export default App;
