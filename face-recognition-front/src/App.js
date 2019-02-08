import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceReconition from './components/FaceReconition/FaceReconition'
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
    imgUrl: ''
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
     .then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {

      }
    )
  }

  render() {
    return (
      <div className="App">
      <Particles className="particles" params={particlesOptions} />
        <Nav />
        <Logo />
        <Rank />

        <ImageLinkForm onInputChange={this.onInputChange}
         onSubmit={this.onSubmit}/>
        <FaceReconition imgUrl={this.state.imgUrl}/>
      </div>
    )
  }
}

export default App;
