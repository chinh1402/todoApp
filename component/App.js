import html from '../core.js'
import { connect } from '../store.js'

function App() {
    return html`
        <h1>HELLO</h1>
    `
}

export default connect()(App)
