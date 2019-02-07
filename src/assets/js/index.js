import React from 'react';
import ReactDOM from 'react-dom';
import KittenImage from '../img/kitten.jpg'; // This is how to add images
import 'normalize.css/normalize.css';
import '../css/styles.scss';
require('../img/favicon.png')

const App = () => {
  return (
    <div>
      <h1>React Component</h1>
      <img src={KittenImage} alt='Kitten'/> {/* This is how to add images */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))