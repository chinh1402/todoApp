export default function html([first,...string],...values) {
  return values.reduce(
      (arr,cur) => arr.concat(cur, string.shift())
      ,[first]
  )
  .filter(x => x && x!==true || x === 0)
  .join('')
}

export function createStore(reducer) {
    let state = reducer();
    const roots = new Map();

    function render() {
        for (const [root, component] of roots) {
            const output = component();
            root.innerHTML = output;
        }
    }
<<<<<<< HEAD

    // example on script: 
    // attach(() => '<h1>HELLO WORLD </h1>', document.getElementById('root'));
=======
>>>>>>> d2392a0 (commit on self)
    return {
        attach(component, root) {
            roots.set(root,component);
            render()
        },
        
       
        connect(selector = state => state) {
<<<<<<< HEAD
            return (component => 
            // props hold the whole fucking html after converting you nerdssssssssssssssssss
            // read above
=======
            return (component =>
>>>>>>> d2392a0 (commit on self)
            (props, ...args) => 
            component(Object.assign({}, props, selector(state),...args)))
        },
        dispatch(action, ...args) {
            state = reducer(state,action,args);
            render();
        }
    }
}