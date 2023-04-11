import css from './Catalog.module.scss'
import { catalogCreator, catalogList } from './catalogCreator'
import menu from '../../../img/header/Menu.svg'

import { useState } from 'react'

const Catalog = () => {
	const [show, setShow] = useState(false)
	const ourCatalog = catalogCreator({ css, catalogList })
	return (
		<div className={css.catalogWrapper} onMouseLeave={() => setShow(false)}>
			<button className={css.btn} onClick={() => setShow(!show)}>
				<img src={menu} alt="burger" />
				<p> КАТАЛОГ</p>
			</button>

			<ul
				className={show ? `${css.menu} ${css.show}` : css.menu}
				onMouseOver={() => setShow(true)}
				onBlur={() => setShow(false)}
			>
				{ourCatalog}
			</ul>
		</div>
	)
}
export default Catalog
