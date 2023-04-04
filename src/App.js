import './App.css'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import WebFont from 'webfontloader'

import About from './modules/about/About.jsx'
import Contacts from './modules/contacts/Contacts.jsx'
import Delivery from './modules/delivery/Delivery.jsx'
import Exchange from './modules/exchange/Exchange.jsx'

import HomePage from './pages/HomePage/HomePage'

function App() {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Comfortaa'],
			},
		})
	}, [])
	return (
		<BrowserRouter basename="/dudu-store-project">
			<Routes>
				<Route path="/" element={<HomePage />}>
					<Route path="about" element={<About />} />
					<Route path="contacts" element={<Contacts />} />
					<Route path="delivery&payment" element={<Delivery />} />
					<Route path="exchange&return" element={<Exchange />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
