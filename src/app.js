class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    // initialize component state
    this.state = {
      options: ['One', 'Dho', 'Tres'],
      error: ''
    }
  }

  handleRemoveAllOptions() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   }
    // });

    this.setState(() => ( {options: []} ));
  }

  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length);
    const randomOption = this.state.options[random];
    console.log(randomOption);
  }

  handleAddOption(option) {

    if (this.state.options.indexOf(option) > -1) {
      this.setState(() => {
        return {
          error: 'Item already exists'
        }
      });

      return;
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat(option),
        error: ''
      }
    });
  }  

  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer.';
    // const options = ['One', 'Dho', 'Tres'];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        
        {/* When 'options' prop changes due to state.options array update, Options component is automatically re-rendered */}
        <Options options={this.state.options} handleRemoveAllOptions={this.handleRemoveAllOptions}/>        
        <AddOption handleAddOption={this.handleAddOption} error={this.state.error}/>
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
        <button 
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleRemoveAllOptions}>Remove All</button>
        {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
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

    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      this.props.handleAddOption(option);
    }
  }

  render() {
    return (
      <div>
        {this.props.error && <div>{this.props.error}</div>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const jsx = (
//   <div>
//     <IndecisionApp />
//   </div>
// )

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));