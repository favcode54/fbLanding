import axios from 'axios'
//root config for API calls using axios
export default axios.create({
  baseURL: 'https://google.com/',
  headers: {
    'Content-Type': 'application/json',
    },
})
