import Slider from 'react-slick'
import rightArrow from '../../img/hero/rightArrow.svg'
import leftArrow from '../../img/hero/leftArrow.svg'
import productsOnSale from '../../data/sale/sale'
import { salesList } from '../../shared/components/salesList/salesList'
import css from './Sale.module.scss'

const Sale = () => {
	const products = salesList(productsOnSale, css)
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		centerMode: false,

		prevArrow: <img src={leftArrow} alt="left" />,
		nextArrow: <img id={css.right} src={rightArrow} alt="right" />,
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
