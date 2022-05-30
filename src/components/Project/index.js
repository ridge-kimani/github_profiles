import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Project = () => {
	let { username } = useParams()
	const [markdown, setMarkdown] = useState('')
	
	useEffect(() => {
		async function getMarkdown() {
			const res = await axios.get('https://raw.githubusercontent.com/ridge-kimani/dating-app/main/README.md')
			setMarkdown(res.data)
		}
		getMarkdown().then(res => console.log('success', res))
		// setMarkdown(res)
	}, [])
	
	console.log({ markdown })
	return  (
			<div className="container mx-auto sm:px-6 lg:px-8">
				<div className="pb-5 pt-5 border-b border-gray-200">
					<h3 className="text-lg leading-6 font-medium text-gray-900 ">Project X Read Me</h3>
				</div>
					<div className="pt-5">
						<ReactMarkdown>{ markdown }</ReactMarkdown>
					
					</div>
			</div>
	)
}

export default Project
