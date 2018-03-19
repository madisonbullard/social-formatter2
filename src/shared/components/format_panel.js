import React from 'react';
import styled, { css } from 'react-emotion';

import { FormatNumericInput } from './format_numeric_input';
import FormatCheckboxInput from './format_checkbox_input';
import { FormatColorInput } from './format_color_input';

const StyledFormatPanelDiv = styled('div')`
  grid-area: format;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #292b2c;
  background-color: #CFD4DD;
	padding: .5rem .75rem;
`;
export const FormatPanel = props => (
  <StyledFormatPanelDiv>
    <FormatNumericInput
      label={'Post Width'}
      value={props.theme.width}
      onInputChange={props.onInputChange}
      param={'width'}
      min={200}
      max={1000}
      step={10}
      snap
    />
    <FormatNumericInput
      label={'Border Radius'}
      value={props.theme.borderRadius}
      onInputChange={props.onInputChange}
      param={'borderRadius'}
      min={0}
      max={100}
      step={0.1}
      snap
    />
    <FormatColorInput
      label={'Post Background Color'}
      color={props.theme.backgroundColor.hex}
      onInputChange={props.onInputChange}
      param={'backgroundColor'}
    />
    <FormatCheckboxInput
      label={'Full Bleed Images'}
      value={props.theme.fullBleedMedia}
      onInputChange={props.onInputChange}
      param={'fullBleedMedia'}
    />
    <FormatNumericInput
      label={'Padding X'}
      value={props.theme.paddingX}
      onInputChange={props.onInputChange}
      param={'paddingX'}
      min={0}
      max={100}
      step={1}
      snap
    />
    <FormatNumericInput
      label={'Padding Y'}
      value={props.theme.paddingY}
      onInputChange={props.onInputChange}
      param={'paddingY'}
      min={0}
      max={100}
      step={1}
      snap
    />
  </StyledFormatPanelDiv>
);

