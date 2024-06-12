import storage from "./util/storage.js";

const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    },
    editIndex : null
}

const actions = {
    add({todos}, title) {
        if (title) {
            todos.push({title, completed : false})
            storage.set(todos)
        }
    },
    toggle({todos}, index){
        const todo = todos[index];
        //since the item in arr are obj, so this return an addr
        todo.completed = !todo.completed;
        storage.set(todos)
    },
    toggleAll({todos}, completed) {
        todos.forEach(todo => todo.completed = completed);
        // each item todo in this forEach is an obj, this also return addr :Đ
        storage.set(todos)
    },
    destroy({todos}, index) {
        todos.splice(index,1);
        storage.set(todos)
    },
    switchFilter(state, filter_value) {
        state.filter = filter_value;
    },
    clear_completed(state) {
        state.todos = state.todos.filter(state.filters.active);
        // todos = todos.filter(filters.active); doesnt work?, yes!
        storage.set(state.todos)
    },
    startEdit(state, index) {
        state.editIndex = index
    },
    endEdit(state, title) {
        if (state.editIndex!==null) {
            if (title) {
                state.todos[state.editIndex].title = title
                storage.set(state.todos)
            }
            else {
                this.destroy(state, state.editIndex)
           }
           state.editIndex = null;
        }
    },
    cancelEdit(state) {
        state.editIndex = null;
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state; 
}
