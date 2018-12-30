import React from 'react';

import Option from './Option'

const Options = (props) => (
  <div>
    <button 
    className="button--link"
    onClick={props.handleRemoveAllOptions}>
    Remove All
    </button>
    {props.options.map((option) => <Option key={option} optionText={option} handleRemoveOption={props.handleRemoveOption} />)}
  </div>
);

export default Options;