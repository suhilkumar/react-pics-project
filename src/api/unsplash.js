import axios from 'axios'

export default  axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 35wRUaJmqjK-BjvCXj2ESh207XKpcIPWw5XjLOTIGKk'
    }
})