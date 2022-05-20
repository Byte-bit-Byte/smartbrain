import React, { Component } from 'react';
import './FaceRecognition.css'

class FaceRecognition extends Component{
  render(){
    const imageUrl = this.props.imageUrl;
    const box = this.props.box;
    return (
	    <div className='center ma'>
        <div className='mt2'>
          <img id='inputimage' src={imageUrl} alt='face recognition display' width='500px' height='auto'  />
          <div className='bounding-box' style={{top: box.topRow, right: box.rightCol , bottom:box.bottomRow , left: box.leftCol }}></div>
        </div>
	    </div>      
  );
  }
}

export default FaceRecognition;