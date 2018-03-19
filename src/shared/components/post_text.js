import React from 'react';
import styled from 'react-emotion';

const StyledSpan = styled('span')`
  white-space: pre-line;
`;

export const PostText = ({ text } = props) => <StyledSpan>{text}</StyledSpan>;
