import style from './Card.module.css'
export function Card({
	img,
	title,
	data,
}: {
	img: string
	title: string
	data?: string
}) {
	return (
		<>
			<div className={style.card}>
				<img src={img} alt='Not' />
				<div className={style.card_info}>
					<h4 className=' font-bold'>{title}</h4>
					<data className='text-gray-500/70 '>April 11, 2022</data>
				</div>
			</div>
		</>
	)
}
