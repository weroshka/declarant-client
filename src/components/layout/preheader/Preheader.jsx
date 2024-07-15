import Contacts from '../../ui/contacts/Contacts'

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

			<Contacts />
		</div>
	)
}

export default Preheader
