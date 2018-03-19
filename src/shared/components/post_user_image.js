import React from 'react';
import styled from 'react-emotion';

const StyledPostUserImage = styled('img')`
	width: 100%;
	display: block;
`;

const selectUserImageSize = (userImageUrl, imageSize = '') => {
  const baseUrl = userImageUrl.substring(0, userImageUrl.lastIndexOf('_'));
  const extension = userImageUrl.substring(userImageUrl.lastIndexOf('.'));
  if (imageSize === 'original') {
    return `${baseUrl}${extension}`;
  }
  return `${baseUrl}_${imageSize}${extension}`;
};

export const PostUserImage = ({ className, imageSize, userImageUrl } = props) => {
  const userImageUrlWithSize = selectUserImageSize(userImageUrl, imageSize);
  return (
    <div className={className}>
      <StyledPostUserImage src={userImageUrlWithSize} alt={userImageUrlWithSize} />
    </div>
  );
};
