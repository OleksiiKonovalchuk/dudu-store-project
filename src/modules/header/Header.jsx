import logo from '../../img/header/duduLogo.svg'
import css from './Header.module.scss'

import NavBar from './NavBar/NavBar'
import SocialsNav from '../../shared/components/SocialsNav/SocialsNav'
import LangBar from './LangBar/LangBar'
import AuthBar from './AuthBar/AuthBar'
import Catalog from './Catalog/Catalog'
import Filter from './Filter/Filter'
import UserMenu from './UserMenu/UserMenu'

import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className={css.header}>
			<div className="container">
				<div className={css.navWrapper}>
					<Link to="/">
						<img className={css.logo} src={logo} alt="logo" />
					</Link>
					<NavBar />
					<a className={css.phone} href="tel:+380631284609" target="_blank" rel="noreferrer">
						(063) 128-46-09
					</a>
					<SocialsNav />
					<LangBar />
					<AuthBar />
				</div>
				<div className={css.catalogWrapper}>
					<Catalog />
					<Filter />
					<UserMenu />
				</div>
			</div>
		</header>
	)
}
export default Header
