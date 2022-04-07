import React from 'react';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Navbar from './components/Navbar/Navbar';
import ContactPage from './pages/ContactPage';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<ContactPage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
