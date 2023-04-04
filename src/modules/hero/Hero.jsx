import css from './Hero.module.scss'
import baby from '../../img/hero/babyYawning.jpg'
import carriage from '../../img/catalog/carriage.svg'
import car from '../../img/catalog/car.svg'
import autochair from '../../img/catalog/autochair.svg'
import chair from '../../img/catalog/chair.svg'
import clothes from '../../img/catalog/clothes.svg'
import feeding from '../../img/catalog/feeding.svg'
import iconNew from '../../img/catalog/new.svg'
import room from '../../img/catalog/room.svg'
import soap from '../../img/catalog/soap.svg'
import toy from '../../img/catalog/toy.svg'

const Hero = () => {
	return (
		<section className={css.hero}>
			<div className={css.container}>
				<ul className={css.menu}>
					<li className={css.item}>
						<img src={carriage} alt="" />
						<p className={css.text}>Дитячі коляски</p>
					</li>
					<li className={css.item}>
						<img src={room} alt="" />
						<p className={css.text}>Дитяча кімната</p>
					</li>
					<li className={css.item}>
						<img src={chair} alt="" />
						<p className={css.text}>Стільці та шезлонги</p>
					</li>
					<li className={css.item}>
						<img src={feeding} alt="" />
						<p className={css.text}>Для годування</p>
					</li>
					<li className={css.item}>
						<img src={soap} alt="" />
						<p className={css.text}>Гігієна та догляд</p>
					</li>
					<li className={css.item}>
						<img src={autochair} alt="" />
						<p className={css.text}>Автокрісла</p>
					</li>
					<li className={css.item}>
						<img src={car} alt="" />
						<p className={css.text}> Дитячий транспорт</p>
					</li>
					<li className={css.item}>
						<img src={toy} alt="" />
						<p className={css.text}>Іграшки</p>
					</li>
					<li className={css.item}>
						<img src={clothes} alt="" />
						<p className={css.text}> Одяг</p>
					</li>
					<li className={css.item}>
						<img src={iconNew} alt="" />
						<p className={css.text}>Новий товар</p>
					</li>
				</ul>
				<div className={css.imgWrapper}>
					<img className={css.img} src={baby} alt="A Baby is yawning" />
				</div>
			</div>
		</section>
	)
}
export default Hero
