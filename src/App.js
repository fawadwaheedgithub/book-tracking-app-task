import React from 'react';

import { Provider } from 'react-redux';
import store from './MainApp/redux/configureStore';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import MainApp from './MainApp';

function App() {
	return (
		<Provider store={store}>
		<MainApp/>
		</Provider>
	);
}

export default App;
