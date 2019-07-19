import React from 'react';
import ReactDOM from 'react-dom';

import{ hello } from './hello';
import config from './config';


console.log(hello(config.name));

import './styles/style.scss';

ReactDOM.render(
<h1>Hello, world!</h1>,
document.getElementById('root')
);


