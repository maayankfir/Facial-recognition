import React, { Component } from 'react';

const Nav = ({onRouteChange, isSignIn}) => {

  return (
    isSignIn ? (<nav style= {{display: 'flex', justifyContent: 'flex-end'}}>
        <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signout')}> Sign Out </p>
      </nav> )
    : ( <nav style= {{display: 'flex', justifyContent: 'flex-end'}}>
        <p className='f3 link dim black underline pa3 pointer'
         onClick={() => onRouteChange('signin')}> Sign In </p>
        <p className='f3 link dim black underline pa3 pointer'
         onClick={() => onRouteChange('signup')}> Sign Up </p>
      </nav> )
  )

}

export default Nav;
