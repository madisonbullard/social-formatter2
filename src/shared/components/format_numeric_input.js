import React from 'react';
import NumericInput from 'react-numeric-input';

export const FormatNumericInput = (props) => {
  const { label, min, max, onInputChange, param, snap, step, value } = props;

  return (
    <div>
      <h3>{label}</h3>
      <NumericInput
        min={min}
        max={max}
        step={step}
        snap={snap}
        value={value}
        onChange={event => onInputChange(param, event)}
      />
    </div>
  );
};
