import BookItem from './BookItem'

function BookList({ books, onDeleteBook }) {
  if (books.length === 0) {
    return <p>Chưa có sách nào trong danh sách 📭</p>
  }

  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onDeleteBook={onDeleteBook}
        />
      ))}
    </ul>
  )
}

export default BookList
