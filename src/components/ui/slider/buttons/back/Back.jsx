import { GrLinkPrevious } from 'react-icons/gr'

import styles from './Back.module.scss'

const Back = ({ className, onClick }) => {
	return (
		<div className={`${className} ${styles.prevArrow}`} onClick={onClick}>
			<GrLinkPrevious />
		</div>
	)
}

export default Back
