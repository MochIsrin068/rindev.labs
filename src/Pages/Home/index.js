import React, { useContext } from 'react'
import GitHubButton from 'react-github-btn'
import { TwitterFollowButton } from 'react-twitter-embed'
import { Helmet } from 'react-helmet'
import Layout from '../../Layout'
import { ThemeContext } from '../../Context/ThemeContext'
import TYPE from '../../Type'
import { AiOutlineLinkedin, AiOutlineMedium, AiOutlineInstagram } from 'react-icons/ai'
import Fade from 'react-reveal/Fade'

const Home = () => {
	const themeContext = useContext(ThemeContext)
	const themeCLassSelected = themeContext.mode === TYPE.DARKMODE ? 'home-dark' : null
	const themeCLassSelectedResume = themeContext.mode === TYPE.DARKMODE ? 'home-resume-dark' : null

	return (
		<>
			<Helmet>
				<title>Rindev - Home</title>
				<meta name='rindev' content='Home' />
			</Helmet>
			<Layout>
				<div id='home' className={`home ${themeCLassSelected}`}>
					<div className='home__content'>
						<div className='home__content__about'>
							<Fade left>
								<h3>OH HI, IT'S ME</h3>
							</Fade>
							<Fade left>
								<h1>Muhammad</h1>
							</Fade>
							<Fade left>
								<h1>Isrim</h1>
							</Fade>
							<Fade left>
								<p>
									I'm a creative, full stack + frontend engineer. I merge technical skills with design
									knowledge to create innovative products that drive business. Currently frontend engineer
									based in Jakarta, Indonesia.
								</p>
							</Fade>
							<Fade left>
								<GitHubButton
									data-color-scheme='no-preference: light; light: light; dark: dark;'
									data-size='large'
									data-show-count='true'
									aria-label='Follow @MochIsrin068 on GitHub'
									href='https://github.com/MochIsrin068'>
									Follow @MochIsrin068
								</GitHubButton>
							</Fade>
							<Fade left>
								<div className='twitter-embed-container'>
									<TwitterFollowButton screenName={'is_rin98'} options={{ size: 'large' }} />
								</div>
							</Fade>
						</div>
						<div className='home__content__profile'>
							<Fade right>
								<div>
									<img src={require('../../Assets/Images/photo.png')} />
									<a
										href={require('../../Assets/Files/MUH ISRIM YAMBI BASO.pdf')}
										className={`${themeCLassSelectedResume}`}>
										Download Resume
									</a>
								</div>
							</Fade>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default Home
