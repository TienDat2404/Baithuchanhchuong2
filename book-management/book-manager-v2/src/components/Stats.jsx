function Stats({ books }) {
  const total = books.length
  const readCount = books.filter((b) => b.read).length

  return (
    <div className="stats">
      <p>Tổng số sách: {total}</p>
      <p>Đã đọc: {readCount}</p>
    </div>
  )
}

export default Stats
