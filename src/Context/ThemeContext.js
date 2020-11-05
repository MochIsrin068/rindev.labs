import React, { createContext, useState } from 'react'
import TYPE from '../Type'

export const ThemeContext = createContext({
	mode: 'light',
	changeTheme: null,
})

const ThemeContextComponent = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState(
		localStorage.getItem('mode') ? localStorage.getItem('mode') : TYPE.LIGHTMODE
	)

	const changeTheme = (theme) => {
		new Promise((resolve, reject) => {
			localStorage.setItem('mode', theme)
			resolve(true)
		})
			.then(() => {
				setCurrentTheme(localStorage.getItem('mode'))
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<ThemeContext.Provider
			value={{
				mode: currentTheme,
				changeTheme: changeTheme,
			}}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextComponent
