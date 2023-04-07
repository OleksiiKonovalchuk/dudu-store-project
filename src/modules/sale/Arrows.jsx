import rightArrow from '../../../img/hero/rightArrow.svg'
import leftArrow from '../../../img/hero/leftArrow.svg'
import css from '../Sale.module.scss'
export const ArrowNext = () => {
	return (
		<button type="button" className={css.rightBtn}>
			<img className={css.next} src={rightArrow} alt="right" />
		</button>
	)
}
export const ArrowPrev = () => {
	return (
		<button type="button" className={`slick-prev ${css.leftBtn}`}>
			<img className={css.prev} src={leftArrow} alt="left" />
		</button>
	)
}
