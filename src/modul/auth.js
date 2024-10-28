import AuthService from '@/service/auth'

const state = {
    isLoading: false,
    userData: null,
    errors: null
}

const mutations = {
    registerStart(state) {
        state.isLoading = true
        state.userData = null
        state.errors = null
    },
    registerSuccess(state, payload) {
        state.isLoading = false
        state.userData = payload
    },
    registerFailed(state, payload) {
        state.isLoading = false
        state.errors = payload
    },
    loginStart(state) {
        state.isLoading = true
        state.errors = null
    },
    loginSuccess(state, payload) {
        state.isLoading = false
        state.userData = payload
    },
    loginFailed(state, payload) {
        state.isLoading = false
        state.errors = payload
    }
}

const actions = {
    register({ commit }, userData) {
        commit('registerStart')
        return new Promise((resolve, reject) => {
            AuthService.register(userData)
                .then(response => {
                    console.log('response', response.data) 
                    commit('registerSuccess', response.data) 
                    resolve(response.data)
                })
                .catch(error => {
                    console.log('error', error.response.data) 
                    commit('registerFailed', error.response.data) 
                    reject(error.response.data)
                })
        })
    },
    login({ commit }, userData) {
        commit('loginStart')
        return new Promise((resolve, reject) => {
            AuthService.login(userData)
                .then(response => {
                    localStorage.setItem('token', response.data.key)
                    localStorage.setItem('user_id', response.data.user_id)
                    console.log('Login response', response.data)
                    commit('loginSuccess', response.data)
                    resolve(response.data)
                })
                .catch(error => {
                    console.log('Login error', error.response.data)
                    commit('loginFailed', error.response.data)
                    reject(error.response.data)
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}
