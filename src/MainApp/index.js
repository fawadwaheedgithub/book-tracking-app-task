import React from 'react';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MyReadingList from './pages/MyReadingList';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Configure routes

const MainApp = () => {
	return (
		<BrowserRouter>
			<div className="app">
				<Header />
				<main>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/my-reading-list" element={<MyReadingList />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default MainApp;
