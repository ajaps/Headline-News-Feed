import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './pages/Layout';
import style from './style/mainStyle.scss';

const mountNode = document.getElementById('rootNode');

ReactDOM.render(<Layout />, mountNode);
