import cn from 'clsx'

import styles from './Card.module.scss'

const Card = ({
	title,
	color = 'white',
	size = 'xs',
	link = false,
	logo = null,
	children
}) => {
	return (
		<div className={cn(styles.card, styles[color], styles[size])}>
			{logo ? <img src={logo} /> : title && <h4>{title}</h4>}
			{children && <p>{children}</p>}
			{link && <a href={link}>Перейти</a>}
		</div>
	)
}

export default Card
