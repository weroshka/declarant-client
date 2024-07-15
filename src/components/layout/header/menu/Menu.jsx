import { NavLink } from 'react-router-dom'

import styles from './Menu.module.scss'
import { menu } from './menu.data.js'

const Menu = () => {
	return (
		<nav className={styles.menu}>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						<NavLink
							to={item.link}
							style={({ isActive }) => ({
								color: isActive ? '#8e0000' : 'black'
							})}
						>
							{item.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Menu
