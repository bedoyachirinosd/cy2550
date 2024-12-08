import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [publisherId, setPublisherId] = useState('');
  const [genreId, setGenreId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/books', { title, author: { id: authorId }, publisher: { id: publisherId }, genre: { id: genreId } })
      .then(() => {
        alert('Book added!');
        setTitle('');
        setAuthorId('');
        setPublisherId('');
        setGenreId('');
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ margin: '5px', padding: '10px', border: '1px solid #ccc' }}
      />
      <input
        type="number"
        placeholder="Author ID"
        value={authorId}
        onChange={(e) => setAuthorId(e.target.value)}
        style={{ margin: '5px', padding: '10px', border: '1px solid #ccc' }}
      />
      <input
        type="number"
        placeholder="Publisher ID"
        value={publisherId}
        onChange={(e) => setPublisherId(e.target.value)}
        style={{ margin: '5px', padding: '10px', border: '1px solid #ccc' }}
      />
      <input
        type="number"
        placeholder="Genre ID"
        value={genreId}
        onChange={(e) => setGenreId(e.target.value)}
        style={{ margin: '5px', padding: '10px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ margin: '5px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>Add Book</button>
    </form>
  );
};

export default AddBook;