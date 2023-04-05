import Promo from './promo/Promo'

import css from './Footer.module.scss'
import Address from './address/Address'

const Footer = () => {
	return (
		<footer>
			<Promo />
			<div className={css.footer}>
				<div className="container">
					<Address />
				</div>
			</div>
		</footer>
	)
}
export default Footer
