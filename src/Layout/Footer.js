import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import TYPE from '../Type'
import { AiFillLinkedin, AiFillMediumSquare, AiFillInstagram } from 'react-icons/ai'
import { ReactComponent as IconMore } from '../Assets/Icons/more.svg'
import Fade from 'react-reveal/Fade'
import { ToggleLayer } from 'react-laag'

const Footer = () => {
	const themeContext = useContext(ThemeContext)
	const themeCLassSelected = themeContext.mode === TYPE.DARKMODE ? 'footer-dark' : null
	const themeCLassSelectedMore = themeContext.mode === TYPE.DARKMODE ? 'more-dark' : null
	const accounts = [
		{ id: 1, title: 'LinkedIn', link: 'https://www.linkedin.com/in/rindev', icon: <AiFillLinkedin /> },
		{ id: 2, title: 'Medium', link: 'https://medium.com/@isrin068', icon: <AiFillMediumSquare /> },
		{ id: 3, title: 'Instagram', link: 'http://instagram.com/is.rin98', icon: <AiFillInstagram /> },
	]

	return (
		<footer className={themeCLassSelected}>
			<Fade bottom>
				<div>
					{accounts.map((account) => (
						<a href={account.link} key={account.id} target='_blank' rel='noopener noreferrer'>
							{account.icon}
							<span>{account.title}</span>
						</a>
					))}
				</div>
			</Fade>

			{/* MOBILE MODE */}
			<Fade bottom>
				<div className='more-contact'>
					<ToggleLayer
						renderLayer={({ isOpen, layerProps }) =>
							isOpen && (
								<div
									ref={layerProps.ref}
									className={`modal-more ${themeCLassSelectedMore}`}
									style={{
										...layerProps.style,
									}}>
									{accounts.map((account) => (
										<a href={account.link} key={account.id} target='_blank' rel='noopener noreferrer'>
											{account.icon}
											<span>{account.title}</span>
										</a>
									))}
								</div>
							)
						}
						placement={{
							autoAdjust: true,
							triggerOffset: 10,
						}}
						closeOnOutsideClick>
						{({ triggerRef, toggle }) => <IconMore ref={triggerRef} className='toggle-btn' onClick={toggle} />}
					</ToggleLayer>
				</div>
			</Fade>

			<Fade bottom>
				<p>(ctrl+c)right 2020</p>
			</Fade>
		</footer>
	)
}

export default Footer
