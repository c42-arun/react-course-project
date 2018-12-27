import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        error: undefined
      };
  
      this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(e) {
      e.preventDefault();
      console.log(tess);
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
            <button>Add Option</button>
          </form>
        </div>
      );
    }
  }