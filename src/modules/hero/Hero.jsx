import { categoriesMenuList } from '../../data/categoriesMenuList/categoriesMenuList'
import css from './Hero.module.scss'
import baby from '../../img/hero/babyYawning.jpg'

const Hero = () => {
	const items = categoriesMenuList.map(({ id, name, picture }) => (
		<li key={id} className={css.item}>
			<img src={picture} alt={name} />
			<p className={css.text}>{name}</p>
		</li>
	))
	return (
		<section className={css.hero}>
			<div className="container">
				<div className={css.heroWrapper}>
					<ul className={css.menu}>{items}</ul>
					<div className={css.imgWrapper}>
						<img className={css.img} src={baby} alt="A Baby is yawning" />
					</div>
				</div>
			</div>
		</section>
	)
}
export default Hero
