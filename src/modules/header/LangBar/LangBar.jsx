import css from './LangBar.module.scss'
const LangBar = () => {
	return (
		<ul className={css.list}>
			<li className={css.item}>
				<p className={css.ukr}>Укр</p>
			</li>
			<li className={css.item}>
				<p className={css.rus}>Рус</p>
			</li>
		</ul>
	)
}
export default LangBar
