import favorite from '../../../img/sale/favorite.svg'
import comparison from '../../../img/sale/сomparison.svg'
import css from './salesStyles.module.scss'

export const salesList = (products) =>
	products.map(({ name, newPrice, oldPrice, picture, discount, id }) => {
		const priceClass = newPrice ? `${css.hasDiscount} ${css.oldPrice}` : css.oldPrice
		return (
			<div className={css.item} key={id}>
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
			</div>
		)
	})
