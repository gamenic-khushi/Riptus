import { useParams, Link } from 'react-router-dom'
import { POSTS } from '../data/posts'
import '../styles/BlogDetail.css'

export default function BlogDetail() {
  const { id } = useParams()
  const post = POSTS.find((p) => p.id === Number(id))

  if (!post) return <div className="bd-notfound">Post not found.</div>

  return (
    <div className="bd-wrapper">
      <h1 className="bd-title">{post.title}</h1>

      <div className="bd-meta">
        <span className="bd-tag">{post.tag}</span>
        <span className="bd-date">{post.date}</span>
      </div>

      <img src={post.img} alt={post.title} className="bd-image" />

    </div>
  )
}
