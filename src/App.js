import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import WebFont from 'webfontloader'

import Header from './modules/header/Header'
import About from './modules/about/About.jsx'
import Contacts from './modules/contacts/Contacts.jsx'
import Delivery from './modules/delivery/Delivery.jsx'
import Exchange from './modules/exchange/Exchange.jsx'

function App() {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Comfortaa'],
			},
		})
	}, [])
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/delivery&payment" element={<Delivery />} />
				<Route path="/exchange&return" element={<Exchange />} />
			</Routes>
		</div>
	)
}

export default App
