import AboutCompany from '../components/screens/about-company/AboutCompany'
import Contacts from '../components/screens/contacts/Contacts'
import ElecDeclaration from '../components/screens/elec-declaration/Elec-declaration'
import Home from '../components/screens/home/Home'
import Partners from '../components/screens/partners/Partners'
import Programs from '../components/screens/programs/Programs'

export const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/elec-declaration',
		component: ElecDeclaration
	},

	{
		path: '/programs',
		component: Programs
	},

	{
		path: '/partners',
		component: Partners
	},

	{
		path: '/about-company',
		component: AboutCompany
	},

	{
		path: '/contacts',
		component: Contacts
	}
]
