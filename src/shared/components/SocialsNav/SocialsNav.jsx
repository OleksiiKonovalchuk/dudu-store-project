import facebook from '../../../img/header/facebook.svg'
import instagram from '../../../img/header/instagram.svg'
import youtube from '../../../img/header/youtube.svg'

import css from './SocialsNav.module.scss'
const SoccialsNav = () => {
	return (
		<ul className={css.list}>
			<li>
				<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
					<img src={instagram} alt="Instagram" />
				</a>
			</li>
			<li>
				<a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
					<img src={youtube} alt="YouTube" />
				</a>
			</li>
			<li>
				<a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
					<img src={facebook} alt="FaceBook" />
				</a>
			</li>
		</ul>
	)
}
export default SoccialsNav
