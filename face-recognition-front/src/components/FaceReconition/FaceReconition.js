import React, { Component } from 'react';

const FaceReconition = ({imgUrl}) =>  {

    return (
      <div className="center ma">
        <div className="absolute mt2">
          <img src={imgUrl} alt="" width='300px' heigh="auto" />
        </div>
      </div>
    );
  }

export default FaceReconition;
