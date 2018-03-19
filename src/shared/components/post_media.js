import React from 'react';
import styled from 'react-emotion';

const StyledPostMedia = styled('img')`
	width: 100%;
	display: block;
`;

export const PostMedia = ({ media } = props) => <StyledPostMedia src={media.url_https} alt={media.url_https} />;
