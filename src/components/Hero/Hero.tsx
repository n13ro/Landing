import Link from 'next/link'
import { CiPlay1 } from 'react-icons/ci'
import { FaDribbble } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { RxInstagramLogo } from 'react-icons/rx'
import style from './Hero.module.css'
export function Hero() {
	return (
		<>
			<section className='w-full grid justify-center items-center border-b border-gray-500/35'>
				<div className={style.hero__conteiner}>
					<div className={style.hero__content}>
						<div className={style.hero__social}>
							<Link href='#' className='hero__social_link'>
								<RxInstagramLogo color='gray' size={24} />
							</Link>
							<Link href='#' className='hero__social_link'>
								<FiTwitter color='gray' size={24} />
							</Link>
							<Link href='#' className='hero__social_link'>
								<FaDribbble color='gray' size={24} />
							</Link>
						</div>
						<h1 className='text-8xl font-bold mb-6 '>Angel Uriostegui</h1>
						<p className=' text-2xl text-gray-500'>
							Your goal is to throw the most epic party for your friends and
							family? I am in! If you’re interested in having me photograph your
							wedding, I’d love for you to get in touch.
						</p>
					</div>

					<div className={style.hero__player}>
						<div className='flex items-center'>
							<div className='preview__icon'>
								<span className='play'>
									<CiPlay1 color='gray' size={50} />
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
