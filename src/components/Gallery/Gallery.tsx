import { Card } from '../Card/Card'
import style from './Gallery.module.css'
export function Gallery() {
	return (
		<>
			<section className={style.gallery}>
				<div className={style.gallary__container}>
					<div className={style.gallery__categories}>
						<button className={style.gallary__button}>Live</button>
						<button className={style.gallary__button}>Videos</button>
						<button className={style.gallary__button}>Progect</button>
						<button className={style.gallary__button}>Travel</button>
					</div>
				</div>
				<div className={style.galleri__cards}>
					<Card img='1.png' title='Brownie' />
					<Card img='2.png' title='By the sea' />
					<Card img='3.png' title='Fog' />
					<Card img='4.png' title='Pointy star' />
					<Card img='5.png' title='Black sea' />
					<Card img='6.png' title='Blue sea' />
					<Card img='7.png' title='Spill' />
					<Card img='8.png' title='Black sand' />
					<Card img='9.png' title='Plants' />
					<Card img='10.png' title='The light' />
					<Card img='11.png' title='Squares' />
					<Card img='12.png' title='Autum' />
				</div>
			</section>
		</>
	)
}
