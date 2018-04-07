class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
    this.handlePickupOneOption = this.handlePickupOneOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state={
      options : ['Thing one', 'Thing two', 'Thing four']
    }
  }
  
  handleDeleteAllOptions(){
    this.setState(() => {
      return{
        options : []
      };
    });
  }

  handlePickupOneOption(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(x){
    this.setState((ps) => {
      return{
        options : ps.options.push(x)
      };
    });
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    // const options = ['Thing one', 'Thing two', 'Thing four'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePickupOneOption={this.handlePickupOneOption}/>
        <Options options={this.state.options} handleDeleteAllOptions={this.handleDeleteAllOptions}/>
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button disabled={!this.props.hasOptions} onClick={this.props.handlePickupOneOption}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteAllOptions}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
  }
  
  addOption(e){
    e.preventDefault();
    this.props.handleAddOption(e.target.elements.optionToBeAdd.value);
    e.target.elements.optionToBeAdd.value = '';
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addOption}>
          <input type="text" name="optionToBeAdd" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
