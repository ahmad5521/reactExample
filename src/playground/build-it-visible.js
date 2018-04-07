class TagVisible extends React.Component {
  constructor(props) {
    super(props);
    this.toggolComment = this.toggolComment.bind(this);
    this.state = {
      visible : true
    } 
  }
  
  toggolComment(){
    console.log('button clicked')
    this.setState((prevState) => {
      return {
        visible : !prevState.visible
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggolComment}>
        {this.state.visible ? 'hide comments' : 'show comments'}
        </button>
          {this.state.visible && <div>
          <p>Hey. These are some details you can now see!</p>
          </div> }
      </div>
    );
  }
}
ReactDOM.render(<TagVisible />, document.getElementById('app'));