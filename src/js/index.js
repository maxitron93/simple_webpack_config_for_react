import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import '../css/styles.scss';

const App = () => {
  return (
    <div>
      <h1>React Component</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))