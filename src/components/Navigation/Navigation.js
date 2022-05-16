import React, { Component } from 'react';

class Navigation extends Component{
  render(){
    return (
	    <nav style={{padding: '1em', display: 'flex', justifyContent: 'flex-end'}}>
	    	<p> Sign Out </p>
	    </nav>
  );
  }
}

export default Navigation;