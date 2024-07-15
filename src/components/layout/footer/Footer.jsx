import Contacts from '../../ui/contacts/Contacts'

import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer_inner}>
				<p>Пишите нам в социальных сетях:</p>
				<Contacts />
				<div className={styles.links}>
					<a href='#'>Политика конфиденциальности</a>
					<a href='#'>Разработка сайта</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
