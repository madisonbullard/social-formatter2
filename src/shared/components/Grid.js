import React, { Component } from 'react'

class Grid extends Component {
  getRepos = () => {
    let repos
    if (__isBrowser__) {
      repos = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      repos = this.props.staticContext.data
    }
    console.log('repos')
    return repos
  }

  state = {
    repos: __isBrowser__ ? window.__INITIAL_DATA__ : this.props.staticContext.data,
    loading: this.getRepos() ? false : true,
  }

  componentDidMount () {
    console.log(this.props)
    if (!this.state.repos) {
      this.fetchRepos(this.props.match.params.id)
      console.log('no repos')
    }
  }

  componentWillReceiveProps (nextProps) {
    const { match } = this.props

    if (nextProps.match.params.id !== match.params.id) {
      this.fetchRepos(nextProps.match.params.id)
    }
  }

  fetchRepos = (lang) => {
    this.setState(() => ({
      loading: true
    }))

    this.props.fetchInitialData(lang)
      .then((repos) => this.setState(() => ({
        repos,
        loading: false,
      })))
  }

  render() {
    const { loading, repos } = this.state

    if (loading === true) {
      console.log('loading...')
      return <p>LOADING</p>
    }

    return (
      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        {repos.map(({ name, owner, stargazers_count, html_url }) => (
          <li key={name} style={{margin: 30}}>
            <ul>
              <li><a href={html_url}>{name}</a></li>
              <li>@{owner.login}</li>
              <li>{stargazers_count} stars</li>
            </ul>
          </li>
        ))}
      </ul>
    )
  }
}

export default Grid