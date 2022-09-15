import html from '../core.js'
import { connect } from '../store.js'
import todoItem from './todoItem.js'

function todoList() {
    return html`
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todoItem()}
                ${todoItem()}
                ${todoItem()}
            </ul>
        </section>
    `
}

export default connect()(todoList)
