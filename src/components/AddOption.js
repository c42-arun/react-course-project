import React from 'react';

export default class AddOption extends React.Component {

  state = {
    error: undefined
  };
  
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if (option) {
      const error = this.props.handleAddOption(option);

      if (!error) {
        e.target.elements.option.value = '';
      }

      this.setState(() => ({ error }));
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <div>{this.state.error}</div>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}