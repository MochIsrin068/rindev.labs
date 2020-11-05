import React, { useContext, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { ThemeContext } from '../Context/ThemeContext'
import TYPE from '../Type'

const Layout = ({ children }) => {
	const themeContext = useContext(ThemeContext)
	const themeCLassSelected = themeContext.mode === TYPE.DARKMODE ? 'layout-dark' : null

	return (
		<main className={`${themeCLassSelected}`}>
			<Header />
			{children}
			<Footer />
		</main>
	)
}

export default Layout
