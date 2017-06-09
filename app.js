import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './public/Pages/Layout';
import style from './public/style/mainStyle.scss';

const mountNode = document.getElementById('mountNode');

ReactDOM.render(<Layout />, mountNode);