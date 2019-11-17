import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import WebsiteRouter from './routers/WebsiteRouter';
import './style/style.scss';


const store = configureStore();
const widgetJsx = (
    <Provider store={store}>
        <WebsiteRouter />
    </Provider>
);


ReactDOM.render(widgetJsx, document.getElementById('root'));
