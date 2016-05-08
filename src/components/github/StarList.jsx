import React from 'react';
import Star from './Star.jsx';

class RepoList extends React.Component {
  render() {
    return (
      <div>
        <table className="fixed">
          <tr>
            <th width="20%">Project</th>
            <th>Description</th>
            <th width="10%">Language</th>
            <th width="5%">Stars</th>
            <th width="5%">Forks</th>
            <th width="15%">Date Created</th>
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