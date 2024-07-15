import { FaBalanceScale } from 'react-icons/fa'
import { GiMoneyStack } from 'react-icons/gi'
import { IoWalletOutline } from 'react-icons/io5'
import { TbGavel } from 'react-icons/tb'
import { TfiWrite } from 'react-icons/tfi'

import Button from '../../ui/button/Button'
import Card from '../../ui/card/Card'
import GarantCard from '../../ui/garant-card/GarantCard'
import NewsSlider from '../../ui/news-slider/NewsSlider'
import Substrate from '../../ui/substrate/Substrate'

import Layout from '../../layout/Layout'

import styles from './Home.module.scss'

function Home() {
	return (
		<Layout>
			<div className={styles.home}>
				<Substrate title='Декларант' subtitle='гарант результата' type='main'>
					<div className={styles.info}>
						<div className={styles.string}>
							<TfiWrite size={40} />
							<p>
								Специализированные программные решения для железнодорожной
								логистики
							</p>
						</div>

						<div className={styles.string}>
							<GiMoneyStack size={40} />
							<p>
								Консультирование по различным вопросам и проблемам в таможенной
								сфере
							</p>
						</div>

						<div className={styles.string}>
							<FaBalanceScale size={40} />
							<p>
								Подключение к системе электронного декларирования, получение
								электронной цифровой подписи
							</p>
						</div>
					</div>
					<Button>Бесплатная консультация специалиста</Button>
				</Substrate>
			</div>

			<div className={styles.suggest}>
				<div className={styles.suggest_inner}>
					<h3>Что мы предлагаем</h3>
					<div className={styles.cards}>
						<Card title='Электронное декларирование' size='xl'>
							 Это прогрессивный и максимально безопасный способ юридического
							взаимодействия с государственными органами, коммерческими
							предприятиями, банковскими организациями, который в большинстве
							случаев является обязательным
						</Card>
						<Card title='Программное обеспечение' size='xl'>
							 Решения компании позволяют решать различные вопросы в таможенном
							деле. Также предоставляется продукция наших <a>партнёров</a>
						</Card>
						<Card title='Консультация' size='xl'>
							 Решения компании позволяют решать различные вопросы в таможенном
							деле. Также предоставляется продукция наших <a>партнёров</a>
						</Card>
					</div>
				</div>
			</div>

			<div className={styles.news}>
				<div className={styles.news_inner}>
					<h3>Новости и обновления</h3>
					<NewsSlider></NewsSlider>
				</div>
			</div>

			<div className={styles.garanty}>
				<div className={styles.inner_garanty}>
					<h3>Мы гарантируем:</h3>
					<GarantCard logo=<TbGavel /> title='Полное совпровождение'>
						Всю работу от начала до конца берем на себя. Вам не придется бегать
						по судам и заниматься заполнением документов
					</GarantCard>
					<GarantCard
						logo=<IoWalletOutline fill={'#d1ad84'} />
						title='Финансовая выгода '
					>
						Работаем не только на сумму спора, также взыскиваем компенсацию
						морального вреда + уплату штрафов. В итоге вы получите больше чем
						рассчитывали
					</GarantCard>
				</div>
			</div>
		</Layout>
	)
}

export default Home
