
import React from 'react';
import ReactDOM from 'react-dom';
// shu joyga bootstp ulanadi;
import 'bootstrap/dist/css/bootstrap.css';

import 'react-toastify/dist/ReactToastify.css'
import App from './App';
import NavigationBar from "./companets/NavigationBar";

import Lifecikle from "./companets/lifecikle"


import Server from "./companets/Server";

import Emploer from "./companets/emploer"

ReactDOM.render( <Emploer/> , document.getElementById('root'));