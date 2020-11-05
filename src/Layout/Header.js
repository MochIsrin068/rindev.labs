import React, { useEffect, useContext, useState, Fragment } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext'
import TYPE from '../Type'
import { ReactComponent as IconSun } from '../Assets/Icons/sun.svg'
import { ReactComponent as IconMoon } from '../Assets/Icons/moon-phases.svg'
import { ReactComponent as IconMenu } from '../Assets/Icons/menu.svg'
import { ReactComponent as IconCancel } from '../Assets/Icons/cancel.svg'
import Fade from 'react-reveal/Fade'

const Menu = () => {
	const themeContext = useContext(ThemeContext)
	const themeCLassSelected = themeContext.mode === TYPE.DARKMODE ? 'header-dark' : null
	const themeCLassSelectedSideBar = themeContext.mode === TYPE.DARKMODE ? 'sidebar-dark' : null
	const themeOption = themeContext.mode === TYPE.DARKMODE ? TYPE.LIGHTMODE : TYPE.DARKMODE

	const [isNavbarShow, setNavbarShow] = useState(false)

	return (
		<Fragment>
			<menu className={themeCLassSelected}>
				<Fade top>
					<h3>
						<Link to='/'>
							{'<'} _rindev <ReactTypingEffect text='/>' />
						</Link>
					</h3>
				</Fade>
				<Fade top>
					<ul>
						<li>
							{themeContext.mode === TYPE.DARKMODE ? (
								<IconSun onClick={() => themeContext.changeTheme(themeOption)} />
							) : (
								<IconMoon onClick={() => themeContext.changeTheme(themeOption)} />
							)}
						</li>
						<li onClick={() => setNavbarShow(true)}>
							{themeContext.mode === TYPE.DARKMODE ? <IconMenu fill='#fff' /> : <IconMenu />}
						</li>
					</ul>
				</Fade>
			</menu>

			{isNavbarShow ? <div className='overlayer-menu'></div> : null}

			{isNavbarShow ? (
				<Fade right>
					<nav className={`sidebar-menu ${themeCLassSelectedSideBar}`} onMouseLeave={() => setNavbarShow(false)}>
						<IconCancel onClick={() => setNavbarShow(false)} />
						<ul>
							<li>
								<Link id='homeLink' to='/'>
									Home
								</Link>
							</li>
							<li>
								<Link id='workLink' to='/work'>
									Work
								</Link>
							</li>
							<li>
								<Link id='blogLink' to='/blog'>
									Blog
								</Link>
							</li>
						</ul>
					</nav>
				</Fade>
			) : null}
		</Fragment>
	)
}

const Header = () => {
	useEffect(() => {
		let prevScrollpos = window.pageYOffset
		window.onscroll = () => {
			let currentScrollPos = window.pageYOffset
			if (prevScrollpos > currentScrollPos) {
				document.getElementById('header').style.top = '0'
			} else {
				document.getElementById('header').style.top = '-70px'
			}
			prevScrollpos = currentScrollPos
		}
	})

	return (
		<header id='header'>
			<Menu />
		</header>
	)
}

export default Header
