import React from 'react';
import Navbar from '../components/Navbar';
import RoutesApp from './RoutesApp';

import 'toastr/build/toastr.min.js'

import 'bootswatch/dist/vapor/bootstrap.css';
import './App.css';
import 'toastr/build/toastr.css'

function App() {
  return (
    <div style={ {fontFamily: 'Cascadia Code', height: '100vh'} }>
      <Navbar />
      <div className="container">
        <RoutesApp />
      </div>
    </div>
  );
}

export default App;
