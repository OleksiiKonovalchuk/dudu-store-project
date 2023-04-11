import { useRef } from 'react'

import css from './UserMenu.module.scss'

import cart from '../../../img/header/cart.svg'
import favorite from '../../../img/header/favorite.svg'
import comparison from '../../../img/header/сomparison.svg'
import search from '../../../img/header/search.svg'
const UserMenu = () => {
	const { current } = useRef(window.innerWidth)
	// console.log(current)
	return (
		<ul className={css.list}>
			{current < 768 && (
				<li className={css.item}>
					<button type="button" className={css.btn}>
						<img className={css.search} src={search} alt="search" />
					</button>
				</li>
			)}
			<li className={css.item}>
				<img src={comparison} alt="comparison" />
				{current >= 768 && <p className={css.counter}>0</p>}
			</li>
			<li className={css.item}>
				<img src={favorite} alt="favorite" />
				{current >= 768 && <p className={css.counter}>0</p>}
			</li>
			<li className={css.item}>
				<img src={cart} alt="cart" />
				{current >= 768 && <p className={css.counter}>0</p>}
			</li>
		</ul>
	)
}
export default UserMenu
