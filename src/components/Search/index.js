import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const baseURL = 'https://api.github.com/users'

export default function Search() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const searchUser = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const { data } = await axios.get(`${baseURL}/${search}/repos`)
      if (!data.length) throw Error('User has no repos')
      localStorage.setItem('projects', JSON.stringify(data))
      localStorage.setItem('search', search)
      return navigate(`/${search}`)
    } catch (e) {
      const { status } = e.response || 500
      if (status === 404) return setError('Username not found')
      else setError(e.message)
    }
  }
  return (
    <div className="grid place-items-center h-screen">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-12 py-5 sm:p-12">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Search Github Profiles
          </h3>

          <form
            className="mt-6 sm:flex sm:flex items-start"
            onSubmit={searchUser}
          >
            <div className="w-full sm:max-w-xs">
              <label htmlFor="email" className="sr-only">
                Github Username
              </label>
              <input
                type="text"
                name="search"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter github username"
              />
              {error && (
                <p
                  className="mt-2 text-sm text-red-600 text-left"
                  id="email-error"
                >
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
