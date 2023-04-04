import css from './Sale.module.scss'
const Sale = () => {
	return (
		<section className={css.sale}>
			<div className={css.container}>
				<div className={css.headerWrapper}>
					<h2 className={css.header}>АКЦІЯ!</h2>
					<span className={css.headerSale}>SALE</span>
				</div>
			</div>
		</section>
	)
}
export default Sale
