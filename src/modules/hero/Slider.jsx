import Slider from 'react-slick'
import babyDesktop from '../../img/hero/babyYawning.jpg'
import babyMobile from '../../img/hero/yawnBaby_mobile.jpg'
import babyTablet from '../../img/hero/yawnBaby_tablet.jpg'
import baby768 from '../../img/hero/yawnBaby_768.png'
import baby1000 from '../../img/hero/yawnBaby_1000.png'
import img1 from '../../img/bigImages/babyBed.jpg'
import img2 from '../../img/bigImages/babyPot.jpg'
import img3 from '../../img/bigImages/bath.jpg'
import img4 from '../../img/bigImages/blanket.jpg'
import img5 from '../../img/bigImages/carriage.jpg'
import img6 from '../../img/bigImages/pazzle.jpg'
import { SlickArrowLeft, SlickArrowRight } from './HeroArrows'
import { useRef } from 'react'
import css from './Hero.module.scss'
const SimpleSlider = () => {
	const { current } = useRef(window.innerWidth)
	const imagePicker = (width) => {
		if (width >= 1290) {
			return babyDesktop
		}
		if (width >= 480) {
			return babyTablet
		}
		if (width <= 360) {
			return babyMobile
		}
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		// centerMode: true,
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
					<img
						srcSet={`${babyMobile} 360w, ${babyTablet} 480w, ${baby768} 768w, ${baby1000} 1000w, ${babyDesktop} 1290w`}
						className={css.slider__image}
						src={babyDesktop}
						alt="baby"
					/>
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
