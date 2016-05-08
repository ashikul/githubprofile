import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'ashikul',
      userData: [],
      userRepos: [],
      userStars: [],
      perPage: 300
    };
  }

  // Get user data from GitHub
  getUserData() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: ((data) => {
        console.log(data);
        this.setState({
          userData: data
        });
      }),
      error: ((xhr, status, err) => {
        this.setState({username: null});
        alert(err);
      })
    });
  }

  // Get user repos
  getUserRepos() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created' + '&direction=asc',
      dataType: 'json',
      cache: false,
      success: ((data) => {
        console.log(data);
        this.setState({
          userRepos: data
        });
      }),
      error: ((xhr, status, err) => {
        this.setState({username: null});
        alert(err);
      })
    });
  }

  // Get user starsrepos
  getUserStars() {
    $.ajax({
      //TODO: get corect api url
      url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created' + '&direction=asc',
      dataType: 'json',
      cache: false,
      success: ((data) => {
        console.log(data);
        this.setState({
          userStars: data
        });
      }),
      error: ((xhr, status, err) => {
        this.setState({username: null});
        alert(err);
      })
    });
  }

  handleFormSubmit(username) {
    this.setState({username}, function () {
      this.getUserData();
      this.getUserRepos();
      this.getUserStars();
    });
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
    this.getUserStars();
  }

  render() {
    return(
      <div>
        <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
        <Profile {...this.state} />
      </div>
    );
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};
App.defaultProps = {
  clientId: 'e31874ea9913ef34d535',
  clientSecret: '46a5fc3e1ff63e4df2e57b665311a3f0713e2d02'
};

export default App;