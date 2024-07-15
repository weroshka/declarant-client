import styles from './GarantCard.module.scss'

const GarantCard = ({ logo, title, children }) => {
	return (
		<div className={styles.garant_card}>
			{logo && <div className={styles.logo_container}>{logo}</div>}
			{title && <h5>{title}</h5>}
			{children && <p>{children}</p>}
		</div>
	)
}

export default GarantCard
