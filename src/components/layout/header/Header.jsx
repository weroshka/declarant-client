import Preheader from '../preheader/Preheader'

import styles from './Header.module.scss'
import Menu from './menu/Menu'

const Header = () => {
	return (
		<header className={styles.header}>
			<Preheader />
			<Menu />
		</header>
	)
}

export default Header
