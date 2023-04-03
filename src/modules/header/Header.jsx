import logo from '../../img/header/duduLogo.svg'

import NavBar from './NavBar/NavBar'
import SocialsNav from './SocialsNav/SocialsNav'
import LangBar from './LangBar/LangBar'
import AuthBar from './AuthBar/AuthBar'
import Catalog from './Catalog/Catalog'
import Filter from './Filter/Filter'
import UserMenu from './UserMenu/UserMenu'

import css from './Header.module.scss'

const Header = () => {
	return (
		<header className={css.header}>
			<div className={css.container}>
				<div className={css.navWrapper}>
					<img className={css.logo} src={logo} alt="logo" />
					<NavBar />
					<a className={css.phone} href="tel:+380631284609">
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