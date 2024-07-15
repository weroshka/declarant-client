import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import Back from '/src/components/ui/slider/buttons/back/Back'
import Next from '/src/components/ui/slider/buttons/next/Next'

import NewsCard from '../news-card/NewsCard'

import styles from './NewsSlider.module.scss'

const NewsSlider = ({ items }) => {
	const settings = {
		className: 'center',
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		nextArrow: <Next />,
		prevArrow: <Back />
	}
	return (
		<div className={`slider-container ${styles.slider}`}>
			<Slider {...settings}>
				<NewsCard
					title='ФТС информирует:'
					link='#'
					titleOrganization='Декларант плюс'
					date='28.12.2024'
				>
					 Это прогрессивный и максимально безопасный способ юридического
					взаимодействия с государственными органами, коммерческими
					предприятиями, банковскими организациями, который в большинстве
					случаев является обязательным
				</NewsCard>
				<NewsCard title='ФТС информирует:' link='#'>
					 Это прогрессивный и максимально безопасный способ юридического
					взаимодействия с государственными органами, коммерческими
					предприятиями, банковскими организациями, который в большинстве
					случаев является обязательным
				</NewsCard>
				<NewsCard title='ФТС информирует:' link='#'>
					 Это прогрессивный и максимально безопасный способ юридического
					взаимодействия с государственными органами, коммерческими
					предприятиями, банковскими организациями, который в большинстве
					случаев является обязательным
				</NewsCard>
			</Slider>
		</div>
	)
}

export default NewsSlider
