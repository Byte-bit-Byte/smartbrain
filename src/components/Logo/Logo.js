import React, { Component } from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './icons8-brain-64.png';

class Logo extends Component{
  render(){
    return (
	    <div className='ma4 mt0'>
	    	<Tilt className='Tilt br2 shadow-2'>
          <img src={brain} alt='smartbrain logo' />
        </Tilt>
	    </div>
  );
  }
}

export default Logo;