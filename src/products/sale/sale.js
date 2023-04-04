import carriage from '../../img/sale/carriage.jpg'
import ball from '../../img/sale/ball.jpg'
import bottle from '../../img/sale/bottle.jpg'
import carChair from '../../img/sale/carChair.jpg'
import milk from '../../img/sale/milk.jpg'

const productsOnSale = [
	{
		name: 'Коляска 2в1 Anex M/Type Dune mt-01Q',
		oldPrice: '6000 грн',
		newPrice: '5000 грн',
		discount: '-15%',
		picture: carriage,
	},
	{
		name: 'Іграшка-головоломка Same Toy IQ Ball Cube',
		oldPrice: '300 грн',
		newPrice: '200 грн',
		discount: '-30%',
		picture: ball,
	},
	{
		name: 'Пляшечка 130 мл',
		oldPrice: '100 грн',
		newPrice: null,
		discount: null,
		picture: bottle,
	},
	{
		name: 'Автокрісло Maxi-Cosi Citi Concrete grey',
		oldPrice: '4300 грн',
		newPrice: null,
		discount: null,
		picture: carChair,
	},
	{
		name: 'Суміш молочна суха Nutrilon для...',
		oldPrice: '350 грн',
		newPrice: '300 грн',
		discount: '-15%',
		picture: milk,
	},
]
export default productsOnSale
