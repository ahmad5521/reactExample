

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count : props.x
    }
  }
  
  addOne(){
    this.setState((previosState) =>{
      return{
        count : previosState.count+1
      };
    });
  }

  minusOne(){
    this.setState((previosState) =>{
      return{
        count : previosState.count-1
      };
    });
  }

  reset(){
    this.setState(() =>{
      return{
        count : this.props.x
      };
    });
  }


  componentDidUpdate(prvProps, prvState){
    if(this.state.count !== prvState.count)
    {
      const Json = JSON.stringify(this.state.count);
      localStorage.setItem('count', Json);
      console.log(localStorage.getItem('count'));
    }
    
  }
  componentWillMount(){
    const count = JSON.parse(localStorage.getItem('count'));
    this.setState(() => ({ count }));
    console.log(localStorage.getItem('count'));
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.reset}>reset</button>
        <button onClick={this.minusOne}>-1</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  x : 0
}



ReactDOM.render(<Counter x="0"/>, document.getElementById('app'))

