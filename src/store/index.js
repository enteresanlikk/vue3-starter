import { createStore } from 'vuex'
import constants from "./constants"
import todoModule from "./modules/todo"

export default createStore({
    state: {
        locale: localStorage.getItem(constants.localeStorageKey) || constants.defaultLocale
    },
    getters: {
        getLocale: state => state.locale
    },
    mutations: {
        setLocale(state, locale) {
            state.locale = locale;
        }
    },
    actions: {
        setLocale({ commit }, locale) {
            localStorage.setItem(constants.localeStorageKey, locale);
            commit('setLocale', locale);
        }
    },
    modules: {
        todo: todoModule
    }
})