import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceReconition from './components/FaceReconition/FaceReconition'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'fcced898217f4c6cbce5b96a1f4df44a'
});

const particlesOptions = {
	    "particles": {
	        "number": {
	            "value": 70
	        },
	        "size": {
	            "value": 10
	        },
          "color": {
                "value": "#000000"
            }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}
class App extends Component {
  state = {
    input: '',
    imgUrl: '',
    box: {},
    route: 'signin',
    isSignIn: false
  }

  findFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage')
    const width = Number(image.width)
    const height = Number(image.height)
    // console.log(width, height);
    return {
      left: clarifaiFace.left_col * width,
      top: clarifaiFace.top_row * height,
      right: width - (clarifaiFace.right_col * width),
      bottom: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({
      box: box
    })
  }

  onInputChange = (event) => {
      console.log(event.target.value);
      this.setState({
        input: event.target.value
      })
  }

  onSubmit = () => {
    this.setState({
      imgUrl: this.state.input
    })
    app.models.predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
     .then(response => this.displayFaceBox(this.findFaceLocation(response))
     .catch(err => console.log(err))
    )
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({
        isSignIn: false
      })
    } else if (route === 'home') {
      this.setState({
        isSignIn: true
      })
    }
    this.setState({
      route: route
    })
  }


  render() {
    // console.log(this.state.box);
    console.log(this.state.isSignIn);
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Nav onRouteChange={this.onRouteChange} isSignIn={this.state.isSignIn}/>
        { (this.state.route === "home") ?
        <div>
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange}
           onSubmit={this.onSubmit}/>
          <FaceReconition box={this.state.box} imgUrl={this.state.imgUrl}/>
          </div>
        : (
          this.state.route === "signin" ?
           ( <SignIn onRouteChange={this.onRouteChange}/>)
            : ( <SignUp onRouteChange={this.onRouteChange}/> )
          )}
      </div>
    )
  }
}

export default App;
