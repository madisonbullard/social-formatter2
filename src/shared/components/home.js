import React, { Component } from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming';
import styled, { injectGlobal } from 'react-emotion';
import { Subscribe } from 'unstated';

import routes from '../services/routes'

import StyleContainer from '../containers/style_container'
import DesignView from './design_view';
// import Navbar from './Navbar'
import Header from './header';
import NoMatch from './NoMatch'

const StyledAppContainerDiv = styled('div')`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-areas: "header header"
                       "format render";
  grid-template-rows: 130px 1fr;
  grid-template-columns: 250px minmax(calc(${p => p.theme.post.width}0px + 1.5rem), 7fr);
  background-color: ${p => p.theme.white};
`;

// const appTheme = { // Global theme declared for use with ThemeProvider
//   white: '#EDF4FC',
//   purple: '#5658F9',
//   gold: '#ffd43b',
//   grey: '#657786',
//   black: '#14171a',
// };

class Home extends Component {

  // getTweet = () => {
  //   let tweet
  //   if (__isBrowser__) {
  //     tweet = window.__INITIAL_DATA__
  //     delete window.__INITIAL_DATA__
  //   } else {
  //     tweet = this.props.staticContext.data
  //   }
  //   return tweet
  // }

  // applyPostThemeState = () => ({
  //   borderRadius: 8,
  //   backgroundColor: { hex: '#ffffff' },
  //   fullBleedMedia: 0,
  //   paddingX: 40,
  //   paddingY: 30,
  //   userNameFontSize: 18,
  //   screenNameFontSize: 14,
  //   width: 660,
  // })

  state = {
    // postTheme: {
    //   post: this.applyPostThemeState(),
    // },
    // tweet: __isBrowser__ ? window.__INITIAL_DATA__ : this.props.staticContext.data,
    // loading: this.getTweet() ? false : true,
  }

  // handleValueChange = (param, value) => {
  //   this.setState({
  //     postTheme: {
  //       post: {
  //         ...this.state.postTheme.post,
  //         [param]: value,
  //       },
  //     },
  //   });
  //   console.log(`${param}:`, value);
  // }

  render() {
    return (
      <Subscribe to={[StyleContainer]}>
        { styleStore => {
          const { state: { appStyles, tweetStyles } } = styleStore
          const theme = { ...appStyles, post: { ...tweetStyles } }
          return(
            <ThemeProvider theme={theme}>
              <StyledAppContainerDiv>
                <Header postTheme={theme.post} />
                <Switch>
                  {routes.map(({ path, exact, component: Component, ...rest }) => (
                    <Route key={path} path={path} exact={exact} render={(props) => (
                      <Component {...props} {...rest} />
                    )} />
                  ))}
                  <Route render={(props) => <NoMatch {...props} /> } />
                </Switch>
              </StyledAppContainerDiv>
            </ThemeProvider>
          )
        }}
      </Subscribe>
    )
  }
}

export default Home

injectGlobal`
  html, body, #app {
    font-family: -apple-system,
      "Helvetica Neue",
      "Segoe UI",
      "Roboto",
      "Roboto Light",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol";
    color: #14171a;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    line-height: 1.5;
  }
  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }
  @font-face {
    font-family: 'edgeicons';
    font-style: normal;
    font-weight: 400;
    src: local('edge icons Regular'), local('edge-icons-Regular'), url(https://dl.dropboxusercontent.com/s/11rqzv3r6b5p9v5/edge-icons-Regular.woff?dl=0) format('woff');
  };
`;


