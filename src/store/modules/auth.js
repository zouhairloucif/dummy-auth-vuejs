import router from "../../router";

const state = () => ({
    users: [],
    user: null,
    loginError: null,
    registerError: null,
})

const getters = {
    loggedUser: state => state.user,
}

const mutations = {
    LOGIN(state, payload) {
        state.loginError = null;
        const user = state.users.find((user) => {
            return user.email === payload.email && user.password === payload.password;
        });
        if (!user) {
            state.loginError = "Login ou mot de passe incorrect";
            return;
        }
        state.user = user;
    },
    REGISTER(state, payload) {
        state.registerError = null;
        const user = state.users.find((user) => user.email === payload.email && user.password === payload.password);
        if (user) {
            state.registerError = "Compte existe déjà !";
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