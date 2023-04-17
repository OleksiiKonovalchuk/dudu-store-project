import { useState } from 'react'
import arrow from '../../../img/hero/rightArrow.svg'
import css from './Promo.module.scss'
const Promo = () => {
	const [email, setEmail] = useState('')
	return (
		<div className={css.promo}>
			<div className={`container ${css.container}`}>
				<form
					className={css.form}
					onSubmit={(e) => {
						e.preventDefault()
						console.log(email)
						setEmail('')
					}}
				>
					<label className={css.label}>
						<p className={css.label__header}>Отримуйте ПРОМОКОДИ ТА ЕКСКЛЮЗИВНІ ПРОПОЗИЦІЇ</p>
						<input
							className={css.input}
							type="email"
							placeholder="Ваш email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value)
							}}
						/>
					</label>
					<button type="submit" className={css.btn}>
						<img className={css.img} src={arrow} alt="" />
					</button>
				</form>
			</div>
		</div>
	)
}
export default Promo
