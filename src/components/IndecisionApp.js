import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
  }

  handleRemoveAllOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleRemoveOption = (optionToRemove) => {
    this.setState(prevState => ({ options: prevState.options.filter(option => option !== optionToRemove) }));
  }

  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    const randomOption = this.state.options[random];

    this.setState(() => ({ selectedOption: randomOption }));
  }

  handleAddOption = (option) => {

    if (this.state.options.indexOf(option) > -1) {
      return 'Item already exists';
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }

  handleCloseModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  componentDidMount() {
    try {
      const cachedOptions = JSON.parse(localStorage.getItem('options'));

      if (cachedOptions) {
        this.setState(() => ({ options: cachedOptions }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevstate', prevState);
    console.log('this.state', this.state);
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem('options', JSON.stringify(this.state.options));
    }
  }

  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer.';
    // const options = ['One', 'Dho', 'Tres'];
    return (
      <div>
        <Header
          title={title}
          subtitle={subtitle}
        />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleRemoveAllOptions={this.handleRemoveAllOptions}
              handleRemoveOption={this.handleRemoveOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          closeModal={this.handleCloseModal}
        />
      </div>
    );
  }
}