import css from './Copyrights.module.scss'
import visa from '../../../img/footer/visa.svg'
import mastercard from '../../../img/footer/mastercard.svg'
import liqpay from '../../../img/footer/liqpay.svg'
const Copyrights = () => {
	return (
		<div className={css.copyrights}>
			<p className={css.header}>© Bubu 2022. Всі права захищені.</p>
			<ul className={css.list}>
				<li className={css.item}>
					<img src={mastercard} alt="" />
				</li>
				<li className={css.item}>
					<img src={visa} alt="" />
				</li>
				<li className={css.item}>
					<img src={liqpay} alt="" />
				</li>
			</ul>
		</div>
	)
}
export default Copyrights
