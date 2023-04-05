import productsOnSale from '../../data/sale/sale'
import { salesList } from '../../shared/components/salesList/salesList'
import css from './Sale.module.scss'

const Sale = () => {
	const products = salesList(productsOnSale, css)
	return (
		<section className={css.sale}>
			<div className="container">
				<div className={css.headerWrapper}>
					<h2 className={css.header}>АКЦІЯ!</h2>
					<span className={css.headerSale}>SALE</span>
				</div>
				<ul className={css.list}>{products}</ul>
			</div>
		</section>
	)
}
export default Sale
