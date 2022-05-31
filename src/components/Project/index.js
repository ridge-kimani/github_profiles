import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import axios from 'axios'

const Project = () => {
  const [markdown, setMarkdown] = useState('')
  const [project, setProject] = useState('')

  useEffect(() => {
    async function getMarkdown() {
      let project = localStorage.getItem('project')
      if (project) {
        project = JSON.parse(project)
        setProject(project)
      }
      const { data } = await axios.get(`${project.url}/contents`)
      if (data.length) {
        const readMe = data.filter(
          (val) => val.name.toLowerCase() === 'readme.md'
        )[0]
        if (readMe) {
          const markdown = await axios.get(readMe.download_url)
          setMarkdown(markdown.data)
        }
      }
    }
    getMarkdown().then((res) => console.log('success', res))
    // setMarkdown(res)
  }, [])

  return (
    <div className="container mx-auto sm:px-6 lg:px-8">
      <div className="pb-5 pt-5 border-b border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-gray-900 ">
          {project.name} Read Me
        </h3>
      </div>
      <div className="pt-5">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Project
