import css from './Catalog.module.scss'

import menu from '../../../img/header/Menu.svg'
import carriage from '../../../img/catalog/carriage.svg'
import car from '../../../img/catalog/car.svg'
import autochair from '../../../img/catalog/autochair.svg'
import chair from '../../../img/catalog/chair.svg'
import clothes from '../../../img/catalog/clothes.svg'
import feeding from '../../../img/catalog/feeding.svg'
import iconNew from '../../../img/catalog/new.svg'
import room from '../../../img/catalog/room.svg'
import soap from '../../../img/catalog/soap.svg'
import toy from '../../../img/catalog/toy.svg'

import Dropdown from 'react-bootstrap/Dropdown'
const Catalog = () => {
	return (
		<Dropdown>
			<Dropdown.Toggle className={css.btn} id="dropdown-basic">
				<img src={menu} alt="burger" />
				<p> КАТАЛОГ</p>
			</Dropdown.Toggle>

			<Dropdown.Menu className={css.menu}>
				<Dropdown.Item href="#" className={css.item}>
					<img src={carriage} alt="" />
					<p className={css.text}>Дитячі коляски</p>
				</Dropdown.Item>
				<Dropdown.Item href="#" className={css.item}>
					<img src={room} alt="" />
					<p className={css.text}>Дитяча кімната</p>
				</Dropdown.Item>
				<Dropdown.Item href="#" className={css.item}>
					<img src={chair} alt="" />
					<p className={css.text}>Стільці та шезлонги</p>
				</Dropdown.Item>
				<Dropdown.Item href="#" className={css.item}>
					<img src={feeding} alt="" />
					<p className={css.text}>Для годування</p>
				</Dropdown.Item>
				<Dropdown.Item href="#" className={css.item}>
					<img src={soap} alt="" />
					<p className={css.text}>Гігієна та догляд</p>
				</Dropdown.Item>
				<Dropdown.Item href="#" className={css.item}>
					<img src={autochair} alt="" />
					<p className={css.text}>Автокрісла</p>
				</Dropdown.Item>
				<Dropdown.Item href="#" className={css.item}>
					<img src={car} alt="" />
					<p className={css.text}> Дитячий транспорт</p>
				</Dropdown.Item>
				<Dropdown.Item href="#" className={css.item}>
					<img src={toy} alt="" />
					<p className={css.text}>Іграшки</p>
				</Dropdown.Item>
				<Dropdown.Item href="#" className={css.item}>
					<img src={clothes} alt="" />
					<p className={css.text}> Одяг</p>
				</Dropdown.Item>
				<Dropdown.Item href="#" className={css.item}>
					<img src={iconNew} alt="" />
					<p className={css.text}>Новий товар</p>
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	)
}
export default Catalog
