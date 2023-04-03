import user from '../../../img/header/user.svg'
import css from './AuthBar.module.scss'
const AuthBar = () => {
	return (
		<div className={css.wrapper}>
			<img className={css.logo} src={user} alt="User" />
			<button className={css.btn}>Вхід</button>
		</div>
	)
}
export default AuthBar
