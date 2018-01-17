import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import AppLayout from './AppLayout';
import store from './store';
import 'semantic-ui-css/semantic.css';


render(
    <Provider store={store}>
        <AppLayout />
    </Provider>,
    document.getElementById('root')
)
