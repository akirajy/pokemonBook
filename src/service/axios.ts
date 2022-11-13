import axios from 'axios'

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
  })
  return instance
}

const instance = createAxiosInstance()
export default instance