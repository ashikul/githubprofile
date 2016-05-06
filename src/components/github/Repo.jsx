import React from 'react';

class Repo extends React.Component {
  render() {
    const {repo} = this.props;
    var repoDate = new Date(repo.created_at);

    return (

      <tr>
        <td><a href={repo.html_url}>{repo.name}</a></td>
        <td>{repo.description}</td>
        <td>{repo.language}</td>
        <td>{repo.stargazers_count}</td>
        <td>{repo.forks}</td>
        <td>{repoDate.toDateString()}</td>
      </tr>
    )
  }
}

export default Repo;