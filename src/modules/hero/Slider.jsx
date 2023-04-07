import Slider from 'react-slick'
import baby from '../../img/hero/babyYawning.jpg'
import img1 from '../../img/bigImages/babyBed.jpg'
import img2 from '../../img/bigImages/babyPot.jpg'
import img3 from '../../img/bigImages/bath.jpg'
import img4 from '../../img/bigImages/blanket.jpg'
import img5 from '../../img/bigImages/carriage.jpg'
import img6 from '../../img/bigImages/pazzle.jpg'
import { SlickArrowLeft, SlickArrowRight } from './HeroArrows'

import css from './Hero.module.scss'
const SimpleSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		dotsClass: `slick-dots ${css.dots}`,
		prevArrow: <SlickArrowLeft css={css} />,
		nextArrow: <SlickArrowRight css={css} />,
	}
	// prevArrow: ,
	// nextArrow: ,

	return (
		<>
			<h2 className="visually-hidden">Single Item</h2>
			<Slider {...settings}>
				<div className={css.slider__imageWrapper}>
					<img className={css.slider__image} src={baby} alt="baby" />
				</div>
				<div className={css.slider__imageWrapper}>
					<img className={css.slider__image} src={img1} alt="img1" />
				</div>
				<div className={css.slider__imageWrapper}>
					<img className={css.slider__image} src={img2} alt="img2" />
				</div>
				<div className={css.slider__imageWrapper}>
					<img className={css.slider__image} src={img3} alt="img3" />
				</div>
				<div className={css.slider__imageWrapper}>
					<img className={css.slider__image} src={img4} alt="img4" />
				</div>
				<div className={css.slider__imageWrapper}>
					<img className={css.slider__image} src={img5} alt="img5" />
				</div>
				<div className={css.slider__imageWrapper}>
					<img className={css.slider__image} src={img6} alt="img6" />
				</div>
			</Slider>
		</>
	)
}

export default SimpleSlider
