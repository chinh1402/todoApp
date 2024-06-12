import { attach } from "../store.js";
import App from "../component/App.js";

// This is similar to React's "render()" function
attach(App, document.getElementById('root'));
