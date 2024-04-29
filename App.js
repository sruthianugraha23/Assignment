import React, { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [newBookTitle, setNewBookTitle] = useState('');

  const handleAddBook = () => {
    if (newBookTitle.trim() !== '') {
      setBooks([...books, newBookTitle]);
      setNewBookTitle('');
    }
  };

  return (
    <div className="App">
      <h1>Favourite Collections</h1>
      <div className="add-book-form">
        <h2>Add New Book/Movies</h2>
        <input
          type="text"
          placeholder="Enter Your favourite Movie or Book"
          value={newBookTitle}
          onChange={(e) => setNewBookTitle(e.target.value)}
        />
        <button onClick={handleAddBook}>Add</button>
      </div>
      <div className="book-list">
        <h2>Books and Movies</h2>
        <ul>
          {books.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}

export default App;
