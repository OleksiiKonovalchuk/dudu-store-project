import { NavLink } from 'react-router-dom'

import css from './NavBar.module.scss'
const NavBar = () => {
	return (
		<nav className={css.nav}>
			<ul className={css.list}>
				<li className={css.item}>
					<NavLink className={css.link} to="/about">
						Про нас
					</NavLink>
				</li>
				<li className={css.item}>
					<NavLink className={css.link} to="/contacts">
						Контакти
					</NavLink>
				</li>
				<li className={css.item}>
					<NavLink className={css.link} to="/delivery&payment">
						Доставка і оплата
					</NavLink>
				</li>
				<li className={css.item}>
					<NavLink className={css.link} to="/exchange&return">
						Повернення і обмін
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}
export default NavBar
