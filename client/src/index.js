import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './i18n';
import Loader from "./components/Loader";

ReactDOM.render(
    <Suspense fallback={<Loader/>}>
        <App />
    </Suspense>,
    document.getElementById('root')
);
registerServiceWorker();
