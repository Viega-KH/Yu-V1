import axios from './axios'

const getUser = {
    users() {
        return axios.get('api/user/account/')
    }
}

export default getUser
