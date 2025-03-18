// write the book component code here
import React from 'react'

function bookcard() {
  return (
    <div className='book-card'>
        <img src={book.img} alt="book" />
        <h3>{book.name}</h3>
        <p>{book.genre}</p>
        <p>{book.author}</p>
    </div>
  )
}

export default bookcard;