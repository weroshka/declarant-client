import styles from './Button.module.scss'

const Button = ({ children, clickHandler = () => {} }) => {
	return (
		<button onClick={clickHandler} className={styles.button}>
			{children}
		</button>
	)
}

export default Button
