import { Outlet } from 'react-router-dom'
import Header from '../../modules/header/Header'
import Hero from '../../modules/hero/Hero'
import Sale from '../../modules/sale/Sale'
import Categories from '../../modules/categories/Categories'
const HomePage = () => {
	return (
		<>
			<Header />
			<Hero />
			<Sale />
			<Categories />
			<Outlet />
		</>
	)
}
export default HomePage
