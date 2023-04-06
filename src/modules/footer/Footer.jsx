import Promo from './promo/Promo'

import css from './Footer.module.scss'
import Address from './address/Address'
import Info from './info/Info'
import FooterCatalog from './catalog/FooterCatalog'
import Copyrights from './copyrights/Copyrights'

const Footer = () => {
	return (
		<footer>
			<Promo />
			<div className={css.footer}>
				<div className="container">
					<div className={css.footer__wrapper}>
						<Address />
						<Info />
						<FooterCatalog />
					</div>
					<Copyrights />
				</div>
			</div>
		</footer>
	)
}
export default Footer
