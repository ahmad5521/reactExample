class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
    this.handlePickupOneOption = this.handlePickupOneOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state={
      options : []
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
    if(!x){
      return 'Enter valid option';
    }else if(this.state.options.indexOf(x) > -1){
      return 'Option Exist'; 
    }
    this.setState((ps) => {
      return{
        options : ps.options.concat(x)
      };
    });
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
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

const Header =  (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} 
              onClick={props.handlePickupOneOption}>
              What should I do?
              </button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteAllOptions}>
              Remove All
              </button>
      {props.options.map((option) => <Option key={option} optionText={option} />)}
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
    </div>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = {
      error : undefined
    };
  }
  addOption(e){
    e.preventDefault();
    const error = this.props.handleAddOption(e.target.elements.optionToBeAdd.value.trim());

    this.setState(() => {
      return{ error };
    });
    e.target.elements.optionToBeAdd.value = '';
  }
  render() {
    return (
      <div>
       {this.state.error}
        <form onSubmit={this.addOption}>
          <input type="text" name="optionToBeAdd" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
