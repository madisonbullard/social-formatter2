import React from 'react';

export const PostUserMention = ({ screenName, linked = false } = props) => {
  const checkLink = (screenName) => {
    if (linked) {
      return (
        <a href={`https://twitter.com/${screenName}`} target="_blank" rel="noopener">
          {screenName}
        </a>
      );
    }
    return screenName;
  };
  return checkLink(<span>@{screenName}</span>);
};
