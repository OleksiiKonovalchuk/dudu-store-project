import { nanoid } from 'nanoid'
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

export const categoriesMenuList = [
	{ id: nanoid(), name: 'Дитячі коляски', picture: carriage },
	{ id: nanoid(), name: 'Дитяча кімната', picture: room },
	{ id: nanoid(), name: 'Стільці та шезлонги', picture: chair },
	{ id: nanoid(), name: 'Для годування', picture: feeding },
	{ id: nanoid(), name: 'Гігієна та догляд', picture: soap },
	{ id: nanoid(), name: 'Автокрісла', picture: autochair },
	{ id: nanoid(), name: 'Дитячий транспорт', picture: car },
	{ id: nanoid(), name: 'Іграшки', picture: toy },
	{ id: nanoid(), name: 'Одяг', picture: clothes },
	{ id: nanoid(), name: 'Новий товар', picture: iconNew },
]
