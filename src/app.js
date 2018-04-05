
let count = 0;

const template2 = (
    <div>
        <h1>Count: {count}</h1>
        <button className="btn">+1</button>
    </div>    
);
    
console.log(template2);

const appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);                             

