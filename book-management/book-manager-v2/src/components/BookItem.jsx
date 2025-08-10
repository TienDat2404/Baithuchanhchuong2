function BookItem({ book, onDeleteBook }) {
  return (
    <li className="book-item">
      <span>
        <strong>{book.title}</strong> - {book.author}
      </span>
      <button onClick={() => onDeleteBook(book.id)}>Xóa</button>
    </li>
  )
}

export default BookItem
