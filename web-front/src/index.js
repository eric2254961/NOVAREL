import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';

// Create browser history to use in the Redux store
const baseUrl = ""; //document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory();//createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App loginUrl="https://localhost:44328/auth/Login/Index" />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
//#Inputs library : https://material-ui.com/components