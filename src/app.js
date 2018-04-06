
class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <OptionsList />
      </div>
    );
  }
}

class Header extends React.Component {
  render(){
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Put your live in your hand</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (      
        <button>what shold i do</button>
    );
  }
}

class OptionsList extends React.Component {
  render() {
    return (
      <div>
        <ol>
          <li>option 1</li>
          <li>option 1</li>
          <li>option 1</li>
          <li>option 1</li>
        </ol>
        <AddOptionForm />
      </div>
    );
  }
}


class AddOptionForm extends React.Component {
  render() {
    return (
      <form onSubmit={onSubmit}>
        <input name="option" type="text"></input>
        <button>add option</button>
      </form>
    );
  }
}

const onSubmit = (e) => {
  e.preventDefault();

  alert(e.target.elements.option.value);
  e.target.elements.option.value = '';

}

  
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));