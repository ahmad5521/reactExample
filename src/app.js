import React from 'react';
import ReactDOM from 'react-dom';
import Action from './components/Action';
import AddOption from './components/AddOption';
import Header from './components/Header';
import Options from './components/Options';


class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
        options: props.options
      };
    }
    handleDeleteOptions() {
      this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
      }));
    }
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
    handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
  
      this.setState((prevState) => ({
        options: prevState.options.concat(option)
      }));
    }
  
  
    componentDidUpdate(prvProps, prvState){
      if(this.state.options.length !== prvState.options.length){
        const Json = JSON.stringify(this.state.options);
        localStorage.setItem('options', Json);
        console.log('component Did Update');
      }
    }
    componentWillMount(){
      try {
        const Json = JSON.parse(localStorage.getItem('options'));
        if(Json)
        {
          this.setState((prevState) => ({
            options: Json
          }));
          console.log('component will Mount');
        }    
      } catch (error) {
        // nothing
      }
    }
  
    render() {
      const subtitle = 'Put your life in the hands of a computer';
      return (
        <div>
          <Header subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
      );
    }
  }
  
  IndecisionApp.defaultProps = {
    options: []
  };
  

  
  ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
  