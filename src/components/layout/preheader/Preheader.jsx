import { FaTelegramPlane } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'

import styles from './Preheader.module.scss'

const Preheader = () => {
	return (
		<div className={styles.preheader}>
			<div className={styles.wrapperInner}>
				<a href='/'>
					<img src='/svg/favicon.svg' alt='ООО Декларант' className='logo' />
				</a>

				<h1>ООО Декларант</h1>
			</div>

			<div className={styles.contacts}>
				<a href='https://wa.me/88005555555'>
					<IoLogoWhatsapp size={20} color='green' />
				</a>
				<a href='https://t.me/'>
					<FaTelegramPlane size={20} color='blue' />
				</a>
				<a href='tel:+88005555555'>8-800-555-55-55</a>
			</div>
		</div>
	)
}

export default Preheader
