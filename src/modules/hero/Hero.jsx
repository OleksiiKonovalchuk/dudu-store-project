// import { categoriesMenuList } from '../../data/categoriesMenuList/categoriesMenuList'
// import baby from '../../img/hero/babyYawning.jpg'

import css from './Hero.module.scss'
import SimpleSlider from './Slider'

const Hero = () => {
	// const items = categoriesMenuList.map(({ id, name, picture }) => (
	// 	<li key={id} className={css.item}>
	// 		<img src={picture} alt={name} />
	// 		<p className={css.text}>{name}</p>
	// 	</li>
	// ))
	return (
		<section className={css.hero}>
			<div className="container">
				<SimpleSlider />
				{/* <div className={css.heroWrapper}>
					<ul className={css.menu}>{items}</ul>
					<div className={css.imgWrapper}>
						<img className={css.img} src={baby} alt="A Baby is yawning" />
					</div>
				</div> */}
			</div>
		</section>
	)
}
export default Hero
