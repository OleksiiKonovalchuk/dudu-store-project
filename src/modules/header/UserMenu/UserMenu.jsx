import css from './UserMenu.module.scss'
import cart from '../../../img/header/cart.svg'
import favorite from '../../../img/header/favorite.svg'
import comparison from '../../../img/header/сomparison.svg'
const UserMenu = () => {
	return (
		<ul className={css.list}>
			<li className={css.item}>
				<img src={comparison} alt="comparison" />
				<p className={css.counter}>0</p>
			</li>
			<li className={css.item}>
				<img src={favorite} alt="favorite" />
				<p className={css.counter}>0</p>
			</li>
			<li className={css.item}>
				<img src={cart} alt="cart" />
				<p className={css.counter}>0</p>
			</li>
		</ul>
	)
}
export default UserMenu
