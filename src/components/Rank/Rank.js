import React, { Component } from 'react';

class Rank extends Component{
  render(){
    return (
	    <div className='ma4 mt0'>
        <div className='white f3'>
          {'User your current rank is ...'}
        </div>
        <div className='white f1'>
          {'#0'}
        </div>
	    </div>      
  );
  }
}

export default Rank;