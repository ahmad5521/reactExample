console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }

};

const onRemoveAll = () => {   
  app.options = [];
  render();
};

let whatShowldIdoOption = '';

const whatShowldIdo = (e) => {
  const random = Math.floor(Math.random() * app.options.length);
  const option = app.options[random];
  alert(option);
render();
};
let myAttr = 'disabled';

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 5 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length ===0} onClick={whatShowldIdo}>what should i do?</button>
      <button onClick={onRemoveAll}>Remove All</button>      
      <ol>
          {
            app.options.map((val,key) => {
            return <li key={key}>{val}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  const jsx = (
    <div>
        <h1>visibility tuggle</h1>
        <button onClick={vis} >{visibility ? 'hide details' : 'show details'}</button>
        {visibility && (<p  name="details">this is detailes</p>)}
    </div>
  );


  ReactDOM.render(<div>{template}  {jsx}</div>, appRoot);
};


let visibility = false;
const vis = (e) => {  

  visibility = !visibility

  render();
};

render();
