class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);

    // initialize component state
    this.state = {
      options: ['One', 'Dho', 'Tres']
    }
  }

  handleRemoveAllOptions() {
    this.setState(() => {
      return {
        options: []
      }
    });
  }

  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length);
    const randomOption = this.state.options[random];
    alert(randomOption);
  }

  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer.';
    // const options = ['One', 'Dho', 'Tres'];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        <Options options={this.state.options} handleRemoveAllOptions={this.handleRemoveAllOptions}/>
        <AddOption />
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
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }

  render() {
    return (
      <div>
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