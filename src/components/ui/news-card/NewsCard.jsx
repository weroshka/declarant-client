import styles from './NewsCard.module.scss'

const NewsCard = ({ title, children, titleOrganization, link, date }) => {
	return (
		<div className={styles.news_card}>
			{title && <h5>{title}</h5>}
			{children && <p>{children}</p>}
			{link && <a href={link}>Читать полностью</a>}
			<div className={styles.source}>
				{titleOrganization && <h6>Источник: {titleOrganization}</h6>}
				{date && <p>{date}</p>}
			</div>
		</div>
	)
}

export default NewsCard
