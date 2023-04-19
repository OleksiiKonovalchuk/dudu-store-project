import Slider from 'react-slick'
import productsOnSale from '../../data/sale/sale'
import css from './Watched.module.scss'
import { salesList } from '../../shared/components/salesList/salesList'

const Watched = () => {
	const watchedProducts = productsOnSale.filter(({ watched }) => watched)
	const products = salesList(watchedProducts, css)
	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrow: false,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 4,
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
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 360,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	}
	return (
		<section className={css.watched}>
			<div className="container">
				<h2 className={css.header}>Ви переглядали</h2>
				<Slider className={css.list} {...settings}>
					{products}
				</Slider>
			</div>
		</section>
	)
}
export default Watched
