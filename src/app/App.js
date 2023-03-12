import React from 'react';
import RoutesApp from './RoutesApp';

import 'bootswatch/dist/vapor/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="container" style={ {height: '100vh'} }>
      <RoutesApp />
    </div>
  );
}

export default App;
