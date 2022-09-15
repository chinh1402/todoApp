import html from '../core.js'
import { connect } from '../store.js'
import todoItem from './todoItem.js'

<<<<<<< HEAD
function todoList({todos, filter, filters}) {
    return html`
        <section class="main">
            <input
            id="toggle-all"
            class="toggle-all"
            type="checkbox"
            onchange = "dispatch('toggleAll', this.checked)"
            ${todos.every(filters.completed) && "checked"}
            >
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">

            ${todos.filter(filters[filter]).map((todo, index) => todoItem({todo, index}))}    

=======
function todoList() {
    return html`
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todoItem()}
                ${todoItem()}
                ${todoItem()}
>>>>>>> 569f2b183acdbf23ff799a79bd91af8de0af4e8b
            </ul>
        </section>
    `
}

<<<<<<< HEAD
export default  connect()(todoList)
=======
export default connect()(todoList)
>>>>>>> 569f2b183acdbf23ff799a79bd91af8de0af4e8b
