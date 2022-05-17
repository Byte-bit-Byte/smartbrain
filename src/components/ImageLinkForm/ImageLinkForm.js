import React, { Component } from 'react';

class ImageLinkForm extends Component{
  render(){
    return (
	    <div className='ma4 mt0'>
        <p className='f3'>
          {'This magic Brain will detect faces in your pictures. Give it a try!'}
        </p>
        <div className='pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' placeholder='summon the face oracle' />
          <button className='w-30 grow f4 linl ph3 pv2 dib white bg-light-purple'> Detect </button>
        </div>
	    </div>      
  );
  }
}

export default ImageLinkForm;