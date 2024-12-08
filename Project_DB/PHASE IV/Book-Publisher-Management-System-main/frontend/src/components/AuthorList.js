import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/authors')
      .then(response => setAuthors(response.data))
      .catch(error => console.error('Error fetching authors:', error));
  }, []);

  return (
    <div style={{
      border: '1px solid black',
      padding: '10px'
    }}>
      <h2>Authors</h2>
      <ul style={{
        listStyleType: 'none',
        padding: '0'
      }}>
        {authors.map(author => (
          <li key={author.id} style={{ padding: '5px' }}>
            {author.name} - {author.bio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;