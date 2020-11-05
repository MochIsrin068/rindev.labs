import React, { useContext, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../../Layout'
import { ThemeContext } from '../../Context/ThemeContext'
import TYPE from '../../Type'
import firebase from 'firebase'
import 'firebase/database'
import { FirebaseDatabaseProvider, FirebaseDatabaseNode } from '@react-firebase/database'
import { config } from '../../Config'
import { HashLoader } from 'react-spinners'
import { AiOutlineGithub, AiOutlineEye } from 'react-icons/ai'
import Fade from 'react-reveal/Fade'
import { ReactComponent as IconArrowUp } from '../../Assets/Icons/up-arrow2.svg'

const Work = () => {
	const themeContext = useContext(ThemeContext)
	const themeCLassSelected = themeContext.mode === TYPE.DARKMODE ? 'work-dark' : null
	const [isLoadingFeature, setIsLoadingFeature] = useState(true)
	const [isLoadingMore, setIsLoadingMore] = useState(true)

	window.onscroll = () => {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById('scrollUpButton').style.display = 'flex'
			document.getElementById('scrollUpButtonDark').style.display = 'flex'
		} else {
			document.getElementById('scrollUpButton').style.display = 'none'
			document.getElementById('scrollUpButtonDark').style.display = 'none'
		}
	}

	const scrollToTop = () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}

	return (
		<>
			<Helmet>
				<title>Rindev - Work</title>
				<meta name='rindev' content='Work' />
			</Helmet>
			<Layout>
				<FirebaseDatabaseProvider firebase={firebase} {...config}>
					<div id='work' className={`work ${themeCLassSelected}`}>
						{isLoadingFeature ? null : <p>Featured Works</p>}
						<Fade top>
							<div className='work__list'>
								<FirebaseDatabaseNode path='work/featured' orderByValue={'title'}>
									{(data) => {
										setIsLoadingFeature(data.isLoading)
										if (data.isLoading) {
											return (
												<div className='item-loader'>
													<HashLoader
														color={themeContext.mode === TYPE.DARKMODE ? '#fdb441' : '#3a67c1'}
													/>
												</div>
											)
										} else {
											if (data.value) {
												return (
													<>
														{data.value.map((item) => {
															return (
																<a
																	className='work__list__card'
																	href={item.link}
																	target='_blank'
																	rel='noopener noreferer'>
																	<section>
																		<h3>{item.name}</h3>
																		<p>{item.desc}</p>
																	</section>
																</a>
															)
														})}
													</>
												)
											} else {
												return (
													<div className='item-empty'>
														<h2>Data Empty</h2>
													</div>
												)
											}
										}
									}}
								</FirebaseDatabaseNode>
							</div>
						</Fade>

						{isLoadingMore ? null : <p>More...</p>}

						<Fade bottom>
							<div className='work__list-more'>
								<FirebaseDatabaseNode path='work/more' orderByValue={'title'}>
									{(data) => {
										setIsLoadingMore(data.isLoading)
										if (data.isLoading) {
											return null
										} else {
											if (data.value) {
												return (
													<>
														{data.value.map((item) => {
															return (
																<a
																	className='work__list-more__link'
																	href={item.link}
																	target='_blank'
																	rel='noopener noreferer'>
																	<section>
																		<h3>{item.name}</h3>
																		<p>{item.desc}</p>
																	</section>
																</a>
															)
														})}
													</>
												)
											} else {
												return null
											}
										}
									}}
								</FirebaseDatabaseNode>
							</div>
						</Fade>
					</div>
				</FirebaseDatabaseProvider>
			</Layout>

			{themeContext.mode === TYPE.DARKMODE ? (
				<div id='scrollUpButtonDark' onClick={() => scrollToTop()}>
					<IconArrowUp />
				</div>
			) : (
				<div id='scrollUpButton' onClick={() => scrollToTop()}>
					<IconArrowUp />
				</div>
			)}
		</>
	)
}

export default Work
