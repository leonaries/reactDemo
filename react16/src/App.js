import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import NameCard from  './components/NameCard'
// import LikesButton from './components/LikesButton'
// import DigitalClock from './components/DigitalClokc'
import CommentBox from './components/CommentBox'
import CommentList from './components/CommentList'
// const tags = ['恐龙','足球小子']
class App extends Component {
  constructor(props){
      super(props)
      this.state = {
          comments:['this is my first reply'],
      }
  }
  addComment (comment) {
      console.log(comment);
      this.setState({
          comments:[...this.state.comments,comment],
      })
      setTimeout(()=>{
          console.log(this.state.comments);
      })
    
  }
  delComment (commentIndex){
      this.state.comments.splice(commentIndex,1,'')
      console.log(this.state.comments)
      this.setState({
          comments:this.state.comments
      })
    
  }
  
  render() {
      const {comments} = this.state;
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>{/*
            <NameCard name='viking' number = {1324567890} isHuman tags = {tags}/>
              <LikesButton/>
              <DigitalClock/>*/}
              <CommentList comments={comments} onDelComment={this.delComment.bind(this)}/>
              <CommentBox commentsLength={comments.length} onAddComment={this.addComment.bind(this)} />
          </div>
    );
  }
}

export default App;
