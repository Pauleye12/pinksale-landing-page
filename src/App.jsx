import React, { Component } from 'react';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Introduction from './components/introduction'
import ToggleState from './components/Togglestate';
import RenderPermanent from './components/renderPermanent';

function App() {

  return (
   <div className=' bg-color '>
    <ToggleState/>
    <RenderPermanent/>
    <Introduction/>
   </div>
  )
}

export default App
