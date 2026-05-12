import { Link } from 'react-router-dom'
import { POSTS } from '../data/posts'
import '../styles/AllBlogs.css'

export default function AllBlogs() {
  return (
    <div className="ab-wrapper">
      <h1 className="ab-heading">ALL BLOGS</h1>

      <div className="ab-list">
        {POSTS.map((post) => (
          <article key={post.id} className="ab-post">
            <div className="ab-post-img">
              <img src={post.img} alt={post.title} />
            </div>

            <div className="ab-post-body">
              <h2 className="ab-post-title">{post.title}</h2>
              <span className="ab-tag">{post.tag}</span>
              <div className="ab-post-meta">
                <Link to={`/blog/${post.id}`} className="ab-read-more">read more</Link>
                <span className="ab-divider">|</span>
                <span className="ab-date">{post.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
