import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

import './index.css';

Amplify.configure(awsconfig);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

serviceWorker.unregister();
