import React from 'react';
import Repo from './Repo.jsx';

class RepoList extends React.Component {
  render() {
    return (
      <div>
        <table className="fixed">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Language</th>
            <th>Stars</th>
            <th>Forks</th>
            <th>Date Created</th>
          </tr>

              {
                this.props.userRepos.map(repo => {
                  return <Repo repo={repo} key={repo.id} {...this.props}/>
                })
              }

          </table>
      </div>
    )
  }
}

export default RepoList;