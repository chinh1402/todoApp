import html from '../core.js'
import { connect } from '../store.js'

<<<<<<< HEAD
function Footer({todos, filter, filters}) {
    return html`
        <footer class="footer">
            <span class="todo-count"><strong>${todos.filter(filters.active).length}</strong> item left</span>
            <ul class="filters">
            ${
                    Object.keys(filters).map(type => html`
                    <li>
                        <a class=${filter === type && "selected"} href="#/"
                        onclick = "dispatch('switchFilter', '${type}')"
                        >${type[0].toUpperCase() +
                        type.slice(1)}</a>
                    </li>
                    `)
                }
            </ul>
            <!-- Hidden if no completed items are left ↓ -->
            <button class="clear-completed"
            onclick = "dispatch('clear_completed')"
            >${todos.filter(filters.completed).length > 0 && "Clear completed"}</button>
=======
function Footer() {
    return html`
        <footer class="footer">
            <span class="todo-count"><strong>0</strong> item left</span>
            <ul class="filters">
                <li>
                    <a class="selected" href="#/">All</a>
                </li>
                <li>
                    <a href="#/active">Active</a>
                </li>
                <li>
                    <a href="#/completed">Completed</a>
                </li>
            </ul>
            <button class="clear-completed">Clear completed</button>
>>>>>>> 569f2b183acdbf23ff799a79bd91af8de0af4e8b
        </footer>
    `
}

<<<<<<< HEAD
export default connect()(Footer)
=======
export default connect()(Footer)
>>>>>>> 569f2b183acdbf23ff799a79bd91af8de0af4e8b
