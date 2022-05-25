import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import Clarifai from 'clarifai';

// console.log(Clarifai); 

// const app = new Clarifai.App({
//  apiKey: 'fec0803447fc40d5a883c26c16ca2aff'
// });

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'home',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    console.log('I recieved this as data', data);
    // const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    // const image = document.getElementById('inputimage');
    // const width = Number(image.width);
    // const height = Number(image.height);
    // return {
    //   leftCol = clarifaiFace.left_col * width,
    //   topRow = clarifaiFace.top_row * height,
    //   rightCol = width - (clarifaiFace.right_col * width),
    //   bottomRow = height - (clarifaiFace.bottom_row * height)
    // }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState((state) => {
      return {input: event.target.value}
    });
  }

  onButtonSubmit = (event) => {
    console.log('click');
    this.setState((state) => {
      return {imageUrl: state.input}
    });
    // app.models
    //   .predict(
    //     Clarifai.FACE_DETECT_MODEL, 
    //     this.state.input)
    //   .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    //   .catch(err => console.log(err));
  }


  onRouteChange = (route) => {
    if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    else {
      this.setState({isSignedIn: false})
    }
    this.setState({route: route})
  }

  render(){
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="App">
      <Particles
      className='particles'
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{       
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 3,
            },
            repulse: {
              distance: 100,
              duration: 0.5,
            },
          },
        },
        particles: {
          color: {
            value: "#f0f",
          },
          links: {
            color: "#00f",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 150,
            },
            value: 30,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }} />

      <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
      
      {/* I was having issues with wrapping the entire thing so I improvised */}
      { this.state.route === 'home' 
        ? 
        <div>
          <Logo /> 
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} input={this.state.input} />               
          <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />  
        </div>
        : 
        (
          this.state.route === 'signin' 
          ? <Signin onRouteChange={this.onRouteChange}/>
          : <Register />  
        )
        }

    </div>
    );
  }
}
export default App;
