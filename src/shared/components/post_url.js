import React from 'react';

export const PostUrl = ({ url, displayUrl, linked = false } = props) => {
  const checkLink = (urlSpan) => {
    if (linked) {
      return (
        <a href={`${url}`} target="_blank" rel="noopener">
          {urlSpan}
        </a>
      );
    }
    return urlSpan;
  };
  return checkLink(<span>{displayUrl}</span>);
};
