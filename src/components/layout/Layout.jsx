import styles from './Layout.module.scss'
import Header from './header/Header'

const Layout = ({ children, bgImage, heading = '', backLink = '/' }) => {
	return (
		<section
			className={styles.layout}
			style={{ backgroundImage: `url(${bgImage}` }}
		>
			<Header />
			{children && <div>{children}</div>}
		</section>
	)
}

export default Layout
