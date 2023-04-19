import Slider from 'react-slick'

import productsOnSale from '../../data/sale/sale'
import { salesList } from '../../shared/components/salesList/salesList'
import css from './Sale.module.scss'

const Sale = () => {
	const products = salesList(productsOnSale, css)
	const settings = {
		infinite: false,
		speed: 1000,
		slidesToShow: 5,
		swipeToSlide: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1289,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<section className={css.sale}>
			<div className="container">
				<div className={css.headerWrapper}>
					<h2 className={css.header}>АКЦІЯ!</h2>
					<span className={css.headerSale}>SALE</span>
				</div>
				{/* <ul className={css.list}>{products}</ul> */}
				<Slider className={css.list} {...settings}>
					{products}
				</Slider>
			</div>
		</section>
	)
}
export default Sale
