import { Outlet } from 'react-router-dom'
import Header from '../../modules/header/Header'
import Hero from '../../modules/hero/Hero'
import Sale from '../../modules/sale/Sale'
import Categories from '../../modules/categories/Categories'
import Brands from '../../modules/brands/Brands'
import Watched from '../../modules/watched/Watched'
import About from '../../modules/about/About'
import Footer from '../../modules/footer/Footer'

const HomePage = () => {
	return (
		<>
			<Header />
			<Hero />
			<Sale />
			<Categories />
			<Brands />
			<About />
			<Watched />
			<Footer />
			<Outlet />
		</>
	)
}
export default HomePage
