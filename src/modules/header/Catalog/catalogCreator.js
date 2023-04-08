import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'

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

export const catalogList = [
	{
		id: nanoid(),
		name: 'Дитячі коляски',
		icon: carriage,
		linkTo: 'catalog/:carriage',
	},
	{
		id: nanoid(),
		name: 'Дитяча кімната',
		icon: room,
		linkTo: 'catalog/:room',
	},
	{
		id: nanoid(),
		name: 'Стільці та шезлонги',
		icon: chair,
		linkTo: 'catalog/:chair',
	},
	{
		id: nanoid(),
		name: 'Для годування',
		icon: feeding,
		linkTo: 'catalog/:feeding',
	},
	{
		id: nanoid(),
		name: 'Гігієна та догляд',
		icon: soap,
		linkTo: 'catalog/:soap',
	},
	{
		id: nanoid(),
		name: 'Автокрісла',
		icon: autochair,
		linkTo: 'catalog/:autochair',
	},
	{
		id: nanoid(),
		name: 'Дитячий транспорт',
		icon: car,
		linkTo: 'catalog/:car',
	},
	{
		id: nanoid(),
		name: 'Іграшки',
		icon: toy,
		linkTo: 'catalog/:toy',
	},
	{
		id: nanoid(),
		name: 'Одяг',
		icon: clothes,
		linkTo: 'catalog/:clothes',
	},
	{
		id: nanoid(),
		name: 'Новий товар',
		icon: iconNew,
		linkTo: 'catalog/:iconNew',
	},
]

export const catalogCreator = ({ css, catalogList }) => {
	return catalogList.map(({ name, id, icon, linkTo }) => (
		<li key={id}>
			<Link className={css.item} to={linkTo}>
				<img src={icon} alt={name} />
				<p className={css.text}>{name}</p>
			</Link>
		</li>
	))
}
