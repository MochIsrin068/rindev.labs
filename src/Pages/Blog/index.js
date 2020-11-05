import React, { useEffect, useState, useContext } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../../Layout'
import API from '../../Services/API'
import ReactHtmlParser from 'react-html-parser'
import { ThemeContext } from '../../Context/ThemeContext'
import TYPE from '../../Type'
import { HashLoader } from 'react-spinners'
import Fade from 'react-reveal/Fade'

const Blog = () => {
	const themeContext = useContext(ThemeContext)
	const themeCLassSelected = themeContext.mode === TYPE.DARKMODE ? 'blog-dark' : null

	const [blogs, setBlogs] = useState(null)

	useEffect(() => {
		API.fetchListBlog().then((response) => (response.status === 'ok' ? setBlogs(response.items) : setBlogs([])))
	}, [])

	const transform = (node) => {
		if (node.type === 'tag' && node.name === 'img') {
			return null
		}
	}

	const htmlParserOptions = {
		decodeEntities: true,
		transform,
	}

	return (
		<>
			<Helmet>
				<title>Rindev - Blog</title>
				<meta name='rindev' content='Blog' />
			</Helmet>
			<Layout>
				<div id='blog' className={`blog ${themeCLassSelected}`}>
					{blogs === null || blogs.length < 1 ? null : (
						<Fade>
							<p>Blog</p>
						</Fade>
					)}
					<div className='blog__list'>
						{blogs === null ? (
							<div className='item-loader'>
								<HashLoader color={themeContext.mode === TYPE.DARKMODE ? '#fdb441' : '#3a67c1'} />
							</div>
						) : blogs.length < 1 ? (
							<div className='item-empty'>
								<h2>Data Empty</h2>
							</div>
						) : (
							blogs.map((blog) => {
								return (
									<Fade>
										<div className='blog__list__card' key={blog.pubDate}>
											<img src={blog.thumbnail} />
											<div>
												<h2>{blog.title}</h2>
												<p>{blog.pubDate}</p>
												{/* <p>{ReactHtmlParser(blog.description, htmlParserOptions)}</p> */}
												<a target='_blank' href={blog.link} rel='noopener noreferrer'>
													Read More..
												</a>
											</div>
										</div>
									</Fade>
								)
							})
						)}
					</div>
				</div>
			</Layout>
		</>
	)
}

export default Blog
