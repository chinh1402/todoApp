import html from '../core.js'
<<<<<<< HEAD
// import { connect } from '../store.js'
=======
import { connect } from '../store.js'
>>>>>>> 569f2b183acdbf23ff799a79bd91af8de0af4e8b

function Header() {
    return html`
        <header class="header">
            <h1>todos</h1>
<<<<<<< HEAD
            <input
            class="new-todo"
            placeholder="What needs to be done?" autofocus
            onkeyup = "event.keyCode === 13 && dispatch('add', this.value.trim())"
            >
=======
            <input class="new-todo" placeholder="What needs to be done?" autofocus>
>>>>>>> 569f2b183acdbf23ff799a79bd91af8de0af4e8b
        </header>
    `
}

<<<<<<< HEAD
export default Header
=======
export default connect()(Header)
>>>>>>> 569f2b183acdbf23ff799a79bd91af8de0af4e8b
