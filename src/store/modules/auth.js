import router from "../../router";

const state = () => ({
    users: [],
    user: null,
})

const getters = {
    loggedUser: state => state.user,
}

const mutations = {
    LOGIN(state, payload) {
        const user = state.users.find((user) => {
            return user.email === payload.email && user.password === payload.password;
        });
        if (!user) {
            router.app.$bvToast.toast('Login ou mot de passe incorrect!', {
                title: 'Un problème est servenue',
                variant: 'danger',
                toaster: 'b-toaster-bottom-right',
                autoHideDelay: 3000,
                solid: true
            })
            return;
        }
        state.user = user;
    },
    REGISTER(state, payload) {
        const user = state.users.find((user) => user.email === payload.email && user.password === payload.password);
        if (user) {
            router.app.$bvToast.toast('Compte existe déjà!', {
                title: 'Un problème est servenue',
                variant: 'danger',
                toaster: 'b-toaster-bottom-right',
                autoHideDelay: 3000,
                solid: true
            })
            return;
        }
        state.users.push(payload);
    },
    LOGOUT(state) {
        state.user = null;
    }
}

const actions = {
    login({ commit }, payload) {
        commit('LOGIN', payload);
        router.push({name: 'Home'});
    },
    register({ commit }, payload) {
        commit('REGISTER', payload);
        router.push({name: 'Login'});
    },
    logout({commit}) {
        commit('LOGOUT');
        router.push({name: 'Login'});
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}