import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Work from './Pages/Work'

export const publicRoutes = [
	{
		name: 'Blog',
		component: Blog,
		url: '/blog',
	},
	{
		name: 'Work',
		component: Work,
		url: '/work',
	},
	{
		name: 'Home',
		component: Home,
		url: '/',
	},
]
