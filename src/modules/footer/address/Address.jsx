import css from './Address.module.scss'
import SoccialsNav from '../../../shared/components/SocialsNav/SocialsNav'
const Address = () => {
	return (
		<address className={css.address}>
			<ul className={css.list}>
				<li className={css.item}>
					<a className={css.phone} href="tel:+380631284609" target="_blank" rel="noreferrer">
						(063) 128-46-09
					</a>
				</li>
				<li className={css.item}>
					<a
						className={css.email}
						href="mailto:bubu.shop2018@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						bubu.shop2018@gmail.com
					</a>
				</li>
				<li className={css.item}>
					<a
						className={css.geo}
						href="https://goo.gl/maps/xxLW2gstt1SDTUDj7"
						target="_blank"
						rel="noreferrer"
					>
						Одеса, вул. Михайлівська 8 (щодня з 10:00 до 20:00)
					</a>
				</li>
				<li className={css.item}>
					<SoccialsNav />
				</li>
			</ul>
		</address>
	)
}
export default Address
