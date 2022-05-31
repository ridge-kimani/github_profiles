import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [search, setSearch] = useState('')
  const [image, setImage] = useState('')
  const { username } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    // storing input name
    let projects = localStorage.getItem('projects')
    const search = localStorage.getItem('search')

    console.log({ username, search })
    if (search !== username) navigate('/')

    setSearch(search)

    if (projects && projects.length) {
      projects = JSON.parse(projects)
      setProjects(projects)
      setImage(projects[0].owner.avatar_url)
    }
  }, [])

  const navigateToProject = (id) => {
    const project = projects.filter((val) => val.id === id)[0]
    localStorage.setItem('project', JSON.stringify(project))
    return navigate(`/${search}/${id}`)
  }

  return (
    <div className="h-screen">
      <div className="pt-8 flex justify-center items-center">
        <img
          className="inline-block h-16 w-16 rounded-full"
          src={image}
          alt=""
        />
        <div className="ml-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            {search}'s projects
          </h3>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Language
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Updated At
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {projects.length ? (
                      projects.map((project) => (
                        <tr
                          key={project.id}
                          className="hover:bg-gray-100 hover:cursor-pointer"
                          onClick={() => navigateToProject(project.id)}
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                            <div className="text-left font-medium text-gray-900">
                              {project.id}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div className="text-gray-900 text-left">
                              {project.name}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">
                            {project.description}
                          </td>

                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">
                            <span className=" inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              {project.language}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">
                            {project.updated_at}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>Not found</tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
