import facebook from '../../../img/header/facebook.svg'
import instagram from '../../../img/header/instagram.svg'
import youtube from '../../../img/header/youtube.svg'
import { useRef } from 'react'
import css from './SocialsNav.module.scss'

const SoccialsNav = () => {
	const { current } = useRef(window.innerWidth)
	return (
		<ul className={css.list}>
			{current > 1000 && (
				<li>
					<a className={css.phone} href="tel:+380631284609" target="_blank" rel="noreferrer">
						(063) 128-46-09
					</a>
				</li>
			)}
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
