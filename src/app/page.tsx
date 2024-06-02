import { Gallery } from '@/components/Gallery/Gallery'
import { Hero } from '@/components/Hero/Hero'

export default function Home() {
	return (
		<main className='flex flex-col items-start justify-between'>
			<Hero />
			<Gallery />
		</main>
	)
}
