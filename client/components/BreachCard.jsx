import React from 'react';

const BreachCard = (props) => {
  const { deleteCard, info } = props;
  const { name, title, domain, date, pwnCount, description, logo } = info;

  return (
    <div>
      <p name={name}>Name: {name}</p>
      <p>Title: {title}</p>
      <p>Domain: {domain}</p>
      <p>Breach Date: {date}</p>
      <p>Pwn Count: {pwnCount}</p>
      <p>Description: {description}</p>
      <p>Logo: {logo}</p>
      <button onClick={deleteCard}>Delete</button>
    </div>
  );
};

export default BreachCard;