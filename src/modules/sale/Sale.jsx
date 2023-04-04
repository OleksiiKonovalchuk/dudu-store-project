import productsOnSale from '../../products/sale/sale'
import css from './Sale.module.scss'
import favorite from '../../img/sale/favorite.svg'
import comparison from '../../img/sale/сomparison.svg'

const Sale = () => {
	const products = productsOnSale.map(({ name, newPrice, oldPrice, picture, discount }) => {
		const priceClass = newPrice ? `${css.hasDiscount} ${css.oldPrice}` : css.oldPrice
		return (
			<li className={css.item} key={name}>
				<div className={css.imgWrapper}>
					<img className={css.img} src={picture} alt={name} />
					{discount && <span className={css.discount}>{discount}</span>}
				</div>
				<p className={css.cardHeader}>{name}</p>
				<div className={css.priceWrapper}>
					<p className={priceClass}>{oldPrice}</p>
					{newPrice && <span className={css.newPrice}>{newPrice}</span>}
				</div>
				<div className={css.options}>
					<button className={css.buyBtn}>Купити</button>
					<button>
						<img src={favorite} alt="favorite" width="23" />
					</button>
					<button>
						<img src={comparison} alt="comparison" width="29" />
					</button>
				</div>
			</li>
		)
	})
	return (
		<section className={css.sale}>
			<div className={css.container}>
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
