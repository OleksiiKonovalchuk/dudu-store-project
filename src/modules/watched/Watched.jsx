import productsOnSale from '../../data/sale/sale'
import css from './Watched.module.scss'
import { salesList } from '../../shared/components/salesList/salesList'

const Watched = () => {
	const watchedProducts = productsOnSale.filter(({ watched }) => watched)
	const products = salesList(watchedProducts, css)
	return (
		<section className={css.watched}>
			<div className="container">
				<h2 className={css.header}>Ви переглядали</h2>
				<ul className={css.list}>{products}</ul>
			</div>
		</section>
	)
}
export default Watched
