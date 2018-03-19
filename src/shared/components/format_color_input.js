import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import { MaterialPicker } from 'react-color';

export const FormatColorInput = (props) => {
  const { label, onInputChange, param, value } = props;
  return (
    <div>
      <h3>{label}</h3>
      <MaterialPicker
        color={value}
        onChangeComplete={(event) => {
          console.log('color event', event);
          onInputChange(param, event);
        }}
      />
    </div>
  );
};

