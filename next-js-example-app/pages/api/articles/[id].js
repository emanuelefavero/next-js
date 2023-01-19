// import the articles array in data.js
import { articles } from '@/data'

// NOTE: Since this file is inside the pages/api folder, the handler function will be called when you visit the /api/articles/[id] route

export default function handler(req, res) {
  const id = req.query.id // get the id from the query string
  const filtered = articles.filter((article) => article.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found ` })
  }
}
