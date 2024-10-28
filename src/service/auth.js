import axios from './axios'

const AuthServics = {
  register(userData) {
    return axios.post('api/auth/registr/v1/', userData)
  },
  login(userData) {
    return axios.post('api/auth/login/v1/', userData)
  }
}

export default AuthServics
