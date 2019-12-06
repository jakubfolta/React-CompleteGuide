import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

import './index.css';

ReactDom.render(<App />, document.getElementById('root'));


















import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
