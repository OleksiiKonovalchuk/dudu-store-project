import css from './Filter.module.scss'
import search from '../../../img/header/search.svg'
const Filter = () => {
	return (
		<form className={css.form}>
			<input className={css.input} placeholder="Я шукаю..." />
			<button className={css.btn}>
				<img className={css.search} src={search} alt="search" />
			</button>
		</form>
	)
}
export default Filter
