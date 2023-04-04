import css from './Categories.module.scss'
import list from '../../products/categories/categories'
const Categories = () => {
	return (
		<section className={css.sectionCategories}>
			<div className={css.container}>
				<h2 className={css.sectionHeader}>Популярні Категорії</h2>
				<ul className={css.list}>
					<li className={`${css.item} ${css.first}`} key={list[0].id}>
						<p className={css.header}>{list[0].name}</p>
						<img className={css.img} src={list[0].picture} alt={list[0].name} height="335" />
					</li>
					<li className={css.item}>
						<div className={`${css.item} ${css.second}`} key={list[1].id}>
							<p className={css.header}>{list[1].name}</p>
							<img className={css.img} src={list[1].picture} alt={list[1].name} height="190" />
						</div>
						<div className={`${css.item} ${css.third}`} key={list[2].id}>
							<p className={css.header}>{list[2].name}</p>
							<img className={css.img} src={list[2].picture} alt={list[2].name} height="190" />
						</div>
					</li>
					<li className={`${css.item} ${css.fourth}`} key={list[3].id}>
						<p className={css.header}>{list[3].name}</p>
						<img className={css.img} src={list[3].picture} alt={list[3].name} height="335" />
					</li>
					<li className={css.item}>
						<div className={`${css.item} ${css.fifth}`} key={list[4].id}>
							<p className={css.header}>{list[4].name}</p>
							<img className={css.img} src={list[4].picture} alt={list[4].name} height="190" />
						</div>
						<div className={`${css.item} ${css.sixth}`} key={list[5].id}>
							<p className={css.header}>{list[5].name}</p>
							<img className={css.img} src={list[5].picture} alt={list[5].name} height="190" />
						</div>
					</li>
				</ul>
			</div>
		</section>
	)
}
export default Categories
