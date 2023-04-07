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
		centerMode: true,
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
