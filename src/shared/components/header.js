
import Post from './post';

import React from 'react';
import styled from 'react-emotion';
import { Subscribe } from 'unstated';

import PostContainer from '../containers/post_container';
import RenderPng from '../services/render_png.js';
import SearchBar from './search_bar';

const StyledHeaderDiv = styled('div')`
  grid-area: header;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${p => p.theme.white};
`;

const StyledParentDiv = styled('div')`
	margin: auto auto 20px 270px;
	display: flex;	
`;

const StyledDownloadButton = styled('button')`
	width: 200px;
	margin-left: 20px;
`;

const Header = props => (
  <StyledHeaderDiv>
	  <StyledParentDiv>
		  <Subscribe to={[PostContainer]}>
		    { postStore => {
	        const { routePost } = postStore
	        return (
	    			<SearchBar routePost={routePost}/>
	    		)
	    	}}
	    </Subscribe>
	    <RenderPng>
		    {( getPostImg ) => {
		    	return (
				    <StyledDownloadButton
				    	onClick={() => { 
				    		getPostImg({...props, theme: props.postTheme}, Post)
				    	}}>
				    	<span>Download</span>
				    </StyledDownloadButton>
			    )
		    }} 
		  </RenderPng>
	  </StyledParentDiv>
  </StyledHeaderDiv>
);

export default Header