import css from './MobileMenu.module.scss'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import logo from '../../../img/header/duduLogo.svg'
import menuBurger from '../../../img/header/baguette.svg'
import UserMenu from '../UserMenu/UserMenu'
import Filter from '../Filter/Filter'
import Catalog from '../Catalog/Catalog'
import NavBar from '../NavBar/NavBar'
import SoccialsNav from '../../../shared/components/SocialsNav/SocialsNav'
import AuthBar from '../AuthBar/AuthBar'
import LangBar from '../LangBar/LangBar'
const MobileMenu = () => {
	const { current } = useRef(window.innerWidth)
	const [menuShow, setMenuShow] = useState(false)
	return (
		<div className={css.menuWrapper}>
			<button type="button" className={css.menuBurger} onClick={() => setMenuShow(true)}>
				<img src={menuBurger} alt="menu" />
			</button>
			<Link className={css.link} to="/">
				<img className={css.logo} src={logo} alt="logo" />
			</Link>
			{current >= 768 && <Filter />}
			<UserMenu />
			{menuShow && (
				<div className={css.backdrop}>
					<div className={css.menu}>
						<Catalog />
						<NavBar />
						<a className={css.phone} href="tel:+380631284609" target="_blank" rel="noreferrer">
							(063) 128-46-09
						</a>
						<SoccialsNav />
						<LangBar />
						<AuthBar />
						<button className={css.closeBtn} type="button" onClick={() => setMenuShow(false)}>
							+
						</button>
					</div>
				</div>
			)}
		</div>
	)
}
export default MobileMenu
