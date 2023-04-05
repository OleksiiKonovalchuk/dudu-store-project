import { nanoid } from 'nanoid'

import anex from '../../img/popular/brands/anex.png'
import lego from '../../img/popular/brands/lego.png'
import bebivita from '../../img/popular/brands/bebivita.png'
import hipp from '../../img/popular/brands/hipp.png'
import huggies from '../../img/popular/brands/huggies.png'
import pampers from '../../img/popular/brands/pampers.png'
import playdoh from '../../img/popular/brands/playdoh.png'

const popularBrands = [
	{ name: 'Play-Doh', logo: playdoh, id: nanoid(), website: 'https://products.hasbro.com/uk-ua' },
	{ name: 'Huggies', logo: huggies, id: nanoid(), website: 'https://www.huggies.co.uk/' },
	{ name: 'Hipp', logo: hipp, id: nanoid(), website: 'https://www.hipp.com/' },
	{ name: 'LEGO', logo: lego, id: nanoid(), website: 'https://www.lego.com/en-us' },
	{ name: 'anex', logo: anex, id: nanoid(), website: 'https://anexbaby.com/ua-uk' },
	{ name: 'Pampers', logo: pampers, id: nanoid(), website: 'https://www.pampers.com/en-us' },
	{ name: 'Bebivita', logo: bebivita, id: nanoid(), website: 'https://www.bebivita.de/' },
]
export default popularBrands
