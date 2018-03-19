import { Container } from 'unstated'

class PostContainer extends Container {
  state = {
    posts: {},
    cachedPosts: {},
    selectedPost: {
      post: {},
      id: '',
      service: ''
    },
  }
  addPost = post => {
    const posts = {...this.state.posts, post}
    this.setState({ posts })
  }
  routePost = url => {
    const statusIdArray = url.match(/status\/([^\/]+)/); // strip out the status ID from the url
    // console.log(statusIdArray)
    if (statusIdArray){
      const service = 'tw'
      // console.log('service:', service)
      const statusId = statusIdArray[1];
      this.selectPost( service, statusId );
    } else {
      console.warn('improper url. try to handle this error more elegantly at some point.')
    }
  }
  selectPost = (service, id) => {
    this.setState({ 
      selectedPost: {
        id,
        service,
        post: {}
      } 
    })
  }
  setPost = (post) => {
    this.setState({
      selectedPost: {
        post
      }
    })
  }
}

export default PostContainer