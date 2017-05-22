import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var marked = require('marked');
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n'};
    this.handleChange = this.handleChange.bind(this);
  }
    handleChange(event) {
    this.setState({value: event.target.value});
    event.preventDefault();
  }

  render(){
  return (
    <div className="Comment">
      <div className="Title">
        reactMarkdown
      </div>
      <div className="mainView">
      <div className="Comment-textA">
           <textarea id="myFormControlIn" value={this.state.value} onChange={this.handleChange}/>
      </div>
        <div className="Comment-textB">
          <div id="myFormControlOut">
       <div dangerouslySetInnerHTML={createMarkup(this.state.value)} />
          </div>
        </div>
      </div>
    </div>
  );
  }
}

function createMarkup(props) {
    var markedText=marked(props, {sanitize: true});
  return {__html: markedText};
}

export default App;
