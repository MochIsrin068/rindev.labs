import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import './Styles/main.scss'
import ThemeContextProvider from './Context/ThemeContext'

const App = () => {
	return (
		<ThemeContextProvider>
			<Router>
				<Switch>
					{publicRoutes.map((route) => {
						return <Route exact component={route.component} key={route.name} path={route.url} />
					})}
				</Switch>
			</Router>
		</ThemeContextProvider>
	)
}

export default App
