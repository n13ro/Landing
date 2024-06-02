import style from './Footer.module.css'
export function Footer() {
	return (
		<>
			<footer className={style.footer}>
				<div className={style.wrapper_content}>
					<div className={style.list}>
						<li>Style Guide</li>
						<li>Licenses</li>
						<li>Changelog</li>
					</div>
					<p className='flex items-center justify-center mt-6'>
						Copyright &copy; 2022 Angel Uriostegui.
					</p>
				</div>
			</footer>
		</>
	)
}
