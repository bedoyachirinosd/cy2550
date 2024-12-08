import React, { useState } from 'react';
import axios from 'axios';

const AddAuthor = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAuthor = { name, bio };

    axios.post('http://localhost:8080/api/authors', newAuthor)
      .then(response => {
        console.log('Author added:', response.data);
        setName('');
        setBio('');
      })
      .catch(error => console.error('Error adding author:', error));
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{
        textAlign: 'center',
        color: '#333'
      }}>Add Author</h2>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div>
          <label style={{
            margin: '10px 0 5px',
            fontWeight: 'bold'
          }}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '15px'
            }}
          />
        </div>
        <div>
          <label style={{
            margin: '10px 0 5px',
            fontWeight: 'bold'
          }}>Bio:</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
            style={{
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '15px'
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            color: '#fff',
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
        >
          Add Author
        </button>
      </form>
    </div>
  );
};

export default AddAuthor;