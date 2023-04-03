import facebook from '../../../img/header/facebook.svg'
import instagram from '../../../img/header/instagram.svg'
import youtube from '../../../img/header/youtube.svg'

import css from './SocialsNav.module.scss'
const SoccialsNav = () => {
	return (
		<ul className={css.list}>
			<li>
				<img src={instagram} alt="Instagram" />
			</li>
			<li>
				<img src={youtube} alt="YouTube" />
			</li>
			<li>
				<img src={facebook} alt="FaceBook" />
			</li>
		</ul>
	)
}
export default SoccialsNav
