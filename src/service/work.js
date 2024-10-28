import axios from './axios'

const getWorks = {
    works() {
        return axios.get('api/works/')
    }
}

export default getWorks
