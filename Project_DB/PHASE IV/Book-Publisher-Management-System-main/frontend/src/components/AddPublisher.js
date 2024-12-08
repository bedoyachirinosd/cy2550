import React, { useState } from 'react';
import axios from 'axios';

const AddPublisher = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/publishers', { name, address })
      .then(() => {
        alert('Publisher added!');
        setName('');
        setAddress('');
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
      <input
        type="text"
        placeholder="Publisher Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ margin: '5px', padding: '10px', border: '1px solid #ccc' }}
      />
      <input
        type="text"
        placeholder="Publisher Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ margin: '5px', padding: '10px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ margin: '5px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>Add Publisher</button>
    </form>
  );
};

export default AddPublisher;