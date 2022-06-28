import React from 'react';
import '../App.css';

//The nav bar is a basic div just styled with links
//The nav bar is styled in css and the links are styled horizontally
export default class NavBar extends React.Component{
  render(){
    return(
      <div class="topnav">
        <a class="active" href="Home">Home</a>
        <a href="Page1">Page1</a>
        <a href="Page2">Page2</a>
      </div>
    )
  }
};
