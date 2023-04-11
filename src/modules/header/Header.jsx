import css from './Header.module.scss'

import NavBar from './NavBar/NavBar'
import SocialsNav from '../../shared/components/SocialsNav/SocialsNav'
import LangBar from './LangBar/LangBar'
import AuthBar from './AuthBar/AuthBar'
import Catalog from './Catalog/Catalog'
import Filter from './Filter/Filter'
import UserMenu from './UserMenu/UserMenu'
import logo from '../../img/header/duduLogo.svg'
import { useEffect, useRef, useState } from 'react'
import MobileMenu from './mobileMenu/MobileMenu'
import { Link } from 'react-router-dom'
const Header = () => {
	const { current } = useRef(window.innerWidth)

	return (
		<header className={css.header}>
			<div className="container">
				{current >= 1290 && (
					<>
						<div className={css.navWrapper}>
							<Link to="/">
								<img className={css.logo} src={logo} alt="logo" />
							</Link>
							<NavBar />

							<SocialsNav />
							<LangBar />
							<AuthBar />
						</div>
						<div className={css.catalogWrapper}>
							<Catalog />
							<Filter />
							<UserMenu />
						</div>
					</>
				)}

				{current <= 1289 && <MobileMenu />}
			</div>
		</header>
	)
}
export default Header
