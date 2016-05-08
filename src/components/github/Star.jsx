import React from 'react';

class Star extends React.Component {
  render() {
    const {star} = this.props;
    var starDate = new Date(star.created_at);

    return (

      <tr>
        <td><a href={star.html_url}>{star.name}</a></td>
        <td>{star.description}</td>
        <td>{star.language}</td>
        <td>{star.stargazers_count}</td>
        <td>{star.forks}</td>
        <td>{starDate.toDateString()}</td>
      </tr>
    )
  }
}

export default Star;