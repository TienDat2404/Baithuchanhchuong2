import { useState } from 'react'

function BookForm({ onAddBook }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !author.trim()) return
    onAddBook({ title, author, read: false })
    setTitle('')
    setAuthor('')
  }

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        placeholder="Tên sách..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tác giả..."
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Thêm sách</button>
    </form>
  )
}

export default BookForm
