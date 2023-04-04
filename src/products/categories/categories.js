import { nanoid } from 'nanoid'
import carriage from '../../img/popular/carriage.png'
import puzzles from '../../img/popular/puzzles.png'
import pot from '../../img/popular/pot.png'
import bath from '../../img/popular/bath.png'
import bed from '../../img/popular/bed.png'
import room from '../../img/popular/room.png'
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
