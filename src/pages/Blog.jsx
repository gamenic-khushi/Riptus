import { Link } from 'react-router-dom'
import { POSTS } from '../data/posts'
import '../styles/Blog.css'

const PREVIEW_POSTS = POSTS.slice(0, 2)

export default function Blog() {
  return (
    <section id="blog" className="blog-main">
      <div />{/* spacer for sidebar column */}

      <div className="blog-content">
        <h1 className="blog-heading">Blogs</h1>
        <div className="blog-bar" />

        <div className="blog-list">
          {PREVIEW_POSTS.map((post) => (
            <article key={post.id} className="blog-post">
              <div className="blog-post-img">
                <img src={post.img} alt={post.title} />
              </div>

              <div className="blog-post-body">
                <h2 className="blog-post-title">{post.title}</h2>
                <div className="blog-post-meta">
                  <Link to={`/blog/${post.id}`} className="blog-read-more">read more</Link>
                  <span className="blog-divider">|</span>
                  <span className="blog-tag">{post.tag}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Link to="/all-blogs" className="blog-more">MORE BLOGS|</Link>
      </div>
    </section>
  )
}
