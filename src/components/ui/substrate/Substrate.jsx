import cn from 'clsx'

import styles from './Substrate.module.scss'

const Substrate = ({ title, subtitle, type = 'main', children }) => {
	return (
		<div className={cn(styles.substrate, styles[type])}>
			<div className={styles.inner_substrate}>
				{title && <h1>{title}</h1>}
				{subtitle && <h2>{subtitle}</h2>}
				{children && <>{children}</>}
			</div>
		</div>
	)
}

export default Substrate
