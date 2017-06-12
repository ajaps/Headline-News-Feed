import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './public/Pages/Layout';
import style from './public/style/mainStyle.scss';

const mountNode = document.getElementById('rootNode');

ReactDOM.render(<Layout />, mountNode);
