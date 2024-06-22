import cn from 'clsx'

import styles from './Menu.module.scss'
import { menu } from './menu.data.js'

const Menu = () => {
	return (
		<nav className={cn(styles.menu)}>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>{item.title}</li>
				))}
			</ul>
		</nav>
	)
}

export default Menu
