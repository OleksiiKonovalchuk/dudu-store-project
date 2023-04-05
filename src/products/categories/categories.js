import { nanoid } from 'nanoid'
import carriage from '../../img/popular/categories/carriage.png'
import puzzles from '../../img/popular/categories/puzzles.png'
import pot from '../../img/popular/categories/pot.png'
import bath from '../../img/popular/categories/bath.png'
import bed from '../../img/popular/categories/bed.png'
import room from '../../img/popular/categories/room.png'
const popularCategories = [
	{
		name: 'Коляски 2в1',
		id: nanoid(),
		picture: carriage,
	},
	{
		name: 'Ліжечка',
		id: nanoid(),
		picture: room,
	},
	{
		name: 'Горщики',
		id: nanoid(),
		picture: pot,
	},
	{
		name: 'Постільна білизна',
		id: nanoid(),
		picture: bed,
	},
	{
		name: 'Пазли',
		id: nanoid(),
		picture: puzzles,
	},
	{
		name: 'Ванночки',
		id: nanoid(),
		picture: bath,
	},
]
export default popularCategories
