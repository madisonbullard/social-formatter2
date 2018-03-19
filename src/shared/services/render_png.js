// import { getImgFromComponent } from '../../../lib/common.js';
import Post from '../components/post';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class RenderPng extends Component {
  getPostImg = (props, component) => { //set the default component to render
    // if (props && props.post && component){
    //   console.log('component', component)
    //   return getImgFromComponent.call({
    //     props: props,
    //     component
    //   }, (err, res) => {
    //     if (err) {
    //       alert(err);
    //     } else {
    //       console.log('res', res);
    //     }
    //   });
    // } else {
    //   console.log('no tweet or component passed to getPostImg')
    //   console.log('props', props)
    //   console.log('component', component)
    // }
  }

  render(){
    return (
      <Fragment>
        {this.props.children(this.getPostImg)}
      </Fragment>
    );
  }
}

export default RenderPng

RenderPng.propTypes = {
  children: PropTypes.func.isRequired
};