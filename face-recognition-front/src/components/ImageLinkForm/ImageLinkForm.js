import React, { Component } from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onSubmit}) => {

  return (
    <div>
      <p className="f3">
        This Magic Brain will detect faces in your pictures!
      </p>
      <div className="center">
        <div className="form pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/> <br></br>
          <button className="w-30 grow f4 link ph3 pv2 dib black bg-light-black"
            onClick={onSubmit}>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;
