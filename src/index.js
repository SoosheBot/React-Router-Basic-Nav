import React from 'react';
import ReactDOM from 'react-dom';
import {Browser as Router} from react-router-dom;
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { domainToASCII } from 'url';

ReactDOM.render(<App />, document.getElementById('root'));
