import css from './Info.module.scss'
const Info = () => {
	return (
		<div className={css.info}>
			<h2 className={css.header}>інформація</h2>
			<ul className={css.list}>
				<li className={css.item}>
					<p className={css.text}>Про нас</p>
				</li>
				<li className={css.item}>
					<p className={css.text}>Контакти</p>
				</li>
				<li className={css.item}>
					<p className={css.text}>Доставка і оплата</p>
				</li>
				<li className={css.item}>
					<p className={css.text}>Повернення та обмін</p>
				</li>
				<li className={css.item}>
					<p className={css.text}>Політика конфеденційності</p>
				</li>
			</ul>
		</div>
	)
}
export default Info
