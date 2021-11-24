import React from 'react';
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      
      {repos.map((repo) => {
        return (
          <li >
            <span className='list-head'>{repo.id}, </span>
            <span className='list-head'>{repo.firstName}, </span>
            <span className='list-head'>{repo.firstName}, </span> 
            <span className='list-head'>{repo.emailId}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
