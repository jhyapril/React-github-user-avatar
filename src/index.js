'use strict';

import React from 'react';
import {render} from 'react-dom';
import routes from './routes';
import {Router} from 'react-router';

render(
  <Router routes={routes}/>,
  document.getElementById('app')
);
