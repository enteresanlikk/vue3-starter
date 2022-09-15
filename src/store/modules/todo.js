import { jphAxios } from "@/utils/axios"

export default {
    namespaced: true,
    state: {
        todos: [],
    },
    getters: {
        getAll: state => state.todos
    },
    mutations: {
        set(state, todos) {
            state.todos = todos;
        },
        update(state, id) {
            const todo = state.todos.find(todo => todo.id === id)
            todo.completed = !todo.completed;
        },
        add(state, title) {
            const last = state.todos[state.todos.length - 1]
            if(last) last.new = false 
    
            state.todos.push({
                id: state.todos.length + 1,
                title,
                completed: false,
                new: true
            })
        }
    },
    actions: {
        async init({ commit }) {
            try {
                const { data } = await jphAxios.get('/todos')
                
                commit('set', data.slice(0, 20))
            } catch (e) {
                console.error(e);
            }
        },
        update({ commit }, id) {
            commit('update', id);
        },
        add({ commit }, title) {
            commit('add', title);
        }
    },
}