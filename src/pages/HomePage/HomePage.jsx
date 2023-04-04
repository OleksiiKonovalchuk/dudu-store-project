import { Outlet } from 'react-router-dom'
import Header from '../../modules/header/Header'
import Hero from '../../modules/hero/Hero'
import Sale from '../../modules/sale/Sale'
const HomePage = () => {
	return (
		<>
			<Header />
			<Hero />
			<Sale />
			<Outlet />
		</>
	)
}
export default HomePage
