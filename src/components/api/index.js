import axios from 'axios'

const baseURL = 'https://api.github.com/users'

export const searchProfile = async (value) => {
  try {
    const { data } = await axios.get(`${baseURL}/${value}/repos`)
    if (!data.length) {
      return new Error('There are no repos for this user')
    }
    localStorage.setItem('projects', data)
    localStorage.setItem('username', value)
    return data
  } catch (e) {
    const { status } = e.response || 500
    if (status === 404) throw 'Username not found'
    else throw e.message
  }
}
