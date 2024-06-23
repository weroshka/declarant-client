import { Link } from 'react-router-dom'

import styles from './Menu.module.scss'
import { menu } from './menu.data.js'

const Menu = () => {
	return (
		<nav className={styles.menu}>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Menu
