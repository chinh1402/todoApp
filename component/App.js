import html from '../core.js'
import { connect } from '../store.js'
import Header from './Header.js'
import todoList from './todoList.js'
import Footer from './Footer.js'
function App() {
    return html`
        <section class="todoapp">
            ${Header()}
            ${todoList()}
            ${Footer()}
        </section>
    `
}

export default connect()(App)
