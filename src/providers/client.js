import axios from 'axios'
import {getToken} from './storafeToken'

const instance = (url = '') => {
    const token = getToken()
    return axios.create({
        baseURL: `https://senac-shopping-list-api.herokuapp.com/v1/${url}`,
        headers: {'Authorization' : token ? `Bearer ${token}` : ''}
    })
}

export default instance()