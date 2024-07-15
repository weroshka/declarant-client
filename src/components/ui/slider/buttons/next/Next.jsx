import { GrLinkNext } from 'react-icons/gr'

import styles from './Next.module.scss'

const Next = props => {
	const { className, onClick } = props
	return (
		<div className={`${className} ${styles.nextArrow}`} onClick={onClick}>
			<GrLinkNext />
		</div>
	)
}

export default Next
