import html from '../core.js'
import { connect } from '../store.js'
import Header from './Header.js'
import todoList from './todoList.js'
import Footer from './Footer.js'
<<<<<<< HEAD

function App({todos}) {
    return html`
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && todoList()}
            ${todos.length > 0 && Footer()}
=======
function App() {
    return html`
        <section class="todoapp">
            ${Header()}
            ${todoList()}
            ${Footer()}
>>>>>>> 569f2b183acdbf23ff799a79bd91af8de0af4e8b
        </section>
    `
}

export default connect()(App)
