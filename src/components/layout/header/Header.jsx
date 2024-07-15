import Preheader from '../preheader/Preheader'

import styles from './Header.module.scss'
import Menu from './menu/Menu'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.inner_header}>
				<Preheader />
				<Menu />
			</div>
		</header>
	)
}

export default Header
