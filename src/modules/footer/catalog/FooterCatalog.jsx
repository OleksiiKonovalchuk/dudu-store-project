import { categoriesMenuList } from '../../../data/categoriesMenuList/categoriesMenuList'
import css from './FooterCatalog.module.scss'
const FooterCatalog = () => {
	const items = categoriesMenuList.map(({ id, name }) => (
		<li key={id} className={css.item}>
			<p className={css.text}>{name}</p>
		</li>
	))
	return (
		<div>
			<h2 className={css.header}>каталог</h2>
			<ul className={css.list}>{items}</ul>
		</div>
	)
}
export default FooterCatalog
