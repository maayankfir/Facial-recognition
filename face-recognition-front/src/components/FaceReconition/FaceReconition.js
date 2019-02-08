import React, { Component } from 'react';
import './FaceReconition.css'
const FaceReconition = ({imgUrl, box}) =>  {

    return (
      <div className="center ma">
        <div className="absolute mt2">
          <img id="inputimage" src={imgUrl} alt="" width='300px' heigh="auto" />
          <div className="bounding-box" style={{top: box.top, right: box.right, bottom: box.bottom, left: box.left }}></div>
        </div>
      </div>
    );
  }

export default FaceReconition;
