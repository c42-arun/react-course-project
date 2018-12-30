import React from 'react';

import Option from './Option'

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3>Your Options</h3>
      <button
        className="button--link"
        onClick={props.handleRemoveAllOptions}>
        Remove All
    </button>
    </div>
    {props.options.map((option) => <Option key={option} optionText={option} handleRemoveOption={props.handleRemoveOption} />)}
  </div>
);

export default Options;