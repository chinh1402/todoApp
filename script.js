import { attach } from './store.js'
import App from './component/App.js'
// component Chưa được tạo ra, thế nhưng chương trình vẫn Run như bth
// lời thì thấm của đớ.. vừa truyền component vào mà???

// attach(component(func), root);
attach(App, document.getElementById('root'));