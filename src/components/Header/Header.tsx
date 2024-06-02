import Link from 'next/link'
import { PiChatCircleTextThin } from 'react-icons/pi'
import style from './Header.module.css'
export function Header() {
	return (
		<>
			<header className={style.header}>
				<div className={style.block}>
					<Link href={'/'} className={style.h1}>
						Angel Uriostegui
						<span className='flex text-cyan-600 items-center'>.</span>
					</Link>
					<div className={style.links}>
						<Link className={style.link} href={'#'}>
							Home v1
						</Link>
						<Link className={style.link} href={'#'}>
							Home v2
						</Link>
						<Link className={style.link} href={'#'}>
							Home v3
						</Link>
					</div>
				</div>
				<div className={style.block_btns}>
					<button className='px-4 py-2 rounded-full border-2 border-gray-500/30 font-bold'>
						Purchase $20
					</button>
					<button className='items-center bg-black/80 p-2 rounded-full'>
						<PiChatCircleTextThin color='white' size={30} />
					</button>
				</div>
			</header>
		</>
	)
}
