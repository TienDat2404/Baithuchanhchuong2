import { useState } from 'react'
import './App.css'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import Stats from './components/Stats'

import { initialBooks } from './data'

function App() {
  const [books, setBooks] = useState(initialBooks)

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }])
  }

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <div className="app-container">
      <h1>Quản lý Sách</h1>
      <BookForm onAddBook={addBook} />
      <Stats books={books} />
      <BookList books={books} onDeleteBook={deleteBook} />
    </div>
  )
}

export default App
