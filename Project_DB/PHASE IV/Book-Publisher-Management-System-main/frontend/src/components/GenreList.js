import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GenreList = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/genres').then((response) => {
      setGenres(response.data);
    });
  }, []);

  return (
    <div style={{
      margin: '20px',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
    }}>
      <h1 style={{ textAlign: 'center' }}>Genres</h1>
      <ul style={{
        listStyleType: 'none',
        padding: '0',
      }}>
        {genres.map((genre) => (
          <li key={genre.id} style={{ padding: '5px' }}>
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;