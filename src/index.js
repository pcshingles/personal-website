import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <div className="App">
    <div className="wrap">
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </div>
  </div>,
  document.getElementById('root'));
registerServiceWorker();
