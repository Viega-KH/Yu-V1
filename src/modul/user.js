import getUser from "@/service/users"

const state = {
    data: null,
    isLoading: false,
    error: null
}


const mutations = {
    getUserStart(state) {
        state.isLoading = true,
            state.data = null,
            state.error = null
    },
    getUserSucces(state, payload) {
        state.isLoading = false,
            state.data = payload
    },
    getUserFailure() {
        state.isLoading = false
    },
}

const actions = {
    users(context) {
        return new Promise((resolve, reject) => {
            context.commit('getUserStart')
            getUser.users()
            .then(response => {
                context.commit('getUserSucces', response.data)
                resolve(response.data)
            })
            .catch( () => {
                context.commit('getUserFailure')
            } )
        })
    }
}

export default {
    state,
    mutations,
    actions
}