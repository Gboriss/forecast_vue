import axios from 'axios'

export const API = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/"
})

export const key = "9a3f56db816fe284dd580a82176924f9"