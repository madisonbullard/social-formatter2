import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { css } from 'emotion';

const StyledSpan = styled('span')`
	font-size: 18px;
	line-height: 18px;
	display: inline-block;
	vertical-align: baseline;
	&:before {
		display: block;
    font-family: "edgeicons";
    font-weight: normal;
    font-style: normal;
    text-align: center;
    -webkit-font-smoothing: antialiased;
	}
`;

class PostIcons extends Component {
	icons = {
	  Like: () => (
	    <StyledSpan css={css`
				&:before {
					content: "\f148";
				}
			`} />
	  ),
	  Message: () => (
	    <StyledSpan css={css`
				&:before {
					content: "\f054";
				}
			`} />
	  ),
	  Reply: () => (
	    <StyledSpan css={css`
				&:before {
					content: "\f151";
				}
			`} />
	  ),
	  Retweet: () => (
	    <StyledSpan css={css`
				&:before {
					content: "\f152";
				}
			`} />
	  ),
	}
	render() {
	  return (
		  <Fragment>
		  	{this.props.render(this.icons)}
	    </Fragment>
	  );
	}
}

PostIcons.propTypes = {
  render: PropTypes.func.isRequired
};

export default PostIcons;
