import React from 'react';
import RepoList from './RepoList.jsx';

class Profile extends React.Component {
  render() {

    var profileDate = new Date(this.props.userData.created_at);
    return (
      <div className="panel panel-default ProfilePanelBox">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.userData.name}</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-4">
              <img src={this.props.userData.avatar_url} className="thumbnail" style={{width: "100%"}}/>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <span className="label label-primary">{this.props.userData.public_repos} repos</span>
                  <span className="label label-success">{this.props.userData.public_gists} public gists</span>
                  <span className="label label-info">{this.props.userData.followers} followers</span>
                  <span className="label label-danger">{this.props.userData.following} following</span>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <ul className="list-group">
                    <li className="list-group-item"><strong>Username:</strong> {this.props.userData.login}</li>
                    <li className="list-group-item"><strong>Location:</strong> {this.props.userData.location}</li>
                    <li className="list-group-item"><strong>Blog address:</strong> <a href={this.props.userData.blog}>{this.props.userData.blog}</a></li>
                    <li className="list-group-item"><strong>Profile Created:</strong> {profileDate.toDateString()}</li>
                  </ul>
                </div>
              </div>
              <br/>
              <a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Visit Profile</a>
            </div>
          </div>

          <hr />
          <h3>User Repositories</h3>
          <RepoList userRepos={this.props.userRepos} />
        </div>
      </div>
    );
  }
}

export default Profile;