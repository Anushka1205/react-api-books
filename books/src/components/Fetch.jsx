import React, { useEffect, useState } from 'react';
import logo from '../images/logo.jpg';
import axios from 'axios';
import '../App.css';

function Fetch() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: {
        'Authorization': 'whatever-you-want'
      }
    })
      .then((res) => {
        setBooks(res.data.books);
        console.log(res.data.books);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className='app'>
        <div className='header'>
          <img src={logo} alt="logo" className='abhi' />
          <input
            type="text"
            placeholder='Search your field'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div></div>
          <button>Register</button>
        </div>
        <div className='section2'>
          <div className='topsearch'>
            <h2>Top Searches:-</h2>
          </div>
          <div className='section3'>
            {filteredBooks.map((book) => (
              <div className="fetch-img" key={book.id}>
                <p className='title'>{book.title}</p>
                <div className='describe'>
                  <img className='book-img' src={book.imageLinks.thumbnail} alt="" />
                  <div >{book.description}</div>
                </div>
                
                
                <div className='rating'>
                  <p>{book.authors}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Fetch;
