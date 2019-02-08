import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';

import './App.css';

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
    input: ''
  }

  onInputChange = (event) => {
      console.log(event.target.value);
  }

  onSubmit = () => {
    console.log('clicked!');
  }
  render() {
    return (
      <div className="App">
      <Particles className="particles" params={particlesOptions} />
        <Nav />
        <Logo />
        <Rank />

        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>

      </div>
    )
  }
}

export default App;
