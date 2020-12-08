import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

if(localStorage.getItem('currentLang')===null)
	localStorage.setItem('currentLang', 'en')

const currentLang = localStorage.getItem('currentLang')
if (currentLang !== 'en')
	document.getElementsByTagName('body')[0].setAttribute('dir', 'rtl')

ReactDOM.render(
	<App/>
	, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
