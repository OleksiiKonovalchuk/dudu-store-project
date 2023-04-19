import Slider from 'react-slick'
import popularBrands from '../../data/brands/brands'
import css from './Brands.module.scss'
const Brands = () => {
	const settings = {
		// infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		swipeToSlide: true,
		arrows: false,
		className: css.slider,
		// centerMode: true,
		// centerPadding: '10%',
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
	const brands = popularBrands.map(({ name, logo, id, website }) => {
		return (
			<li key={id} className={css.item}>
				<a href={website} target="_blank" rel="noreferrer">
					<img className={css.img} src={logo} alt={name} />
				</a>
			</li>
		)
	})
	return (
		<section className={css.brands}>
			<div className="container">
				<h2 className={css.header}>Популярні бренди</h2>
				<Slider className={css.list} {...settings}>
					{brands}
				</Slider>
			</div>
		</section>
	)
}
export default Brands
