import rightArrow from '../../img/hero/rightArrow.svg'
import leftArrow from '../../img/hero/leftArrow.svg'
export const SlickArrowLeft = ({ css, currentSlide, slideCount, ...props }) => (
	<button
		{...props}
		className={
			'slick-prev slick-arrow ' +
			css.leftArrow +
			` ${css.arrow}` +
			(currentSlide === 0 ? ' slick-disabled' : '')
		}
		aria-hidden="true"
		aria-disabled={currentSlide === 0 ? true : false}
		type="button"
	>
		<img className={css.arrowImg} src={leftArrow} alt="left" />
	</button>
)
export const SlickArrowRight = ({ css, currentSlide, slideCount, ...props }) => (
	<button
		{...props}
		className={
			'slick-next slick-arrow ' +
			css.rightArrow +
			` ${css.arrow}` +
			(currentSlide === slideCount - 1 ? ' slick-disabled' : '')
		}
		aria-hidden="true"
		aria-disabled={currentSlide === slideCount - 1 ? true : false}
		type="button"
	>
		<img className={css.arrowImg} src={rightArrow} alt="right" />
	</button>
)
