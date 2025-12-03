import { Link } from "react-router-dom";
import "./style.css";
import type { Post } from "../../utils";

export default function Card({ post }: { post: Post }) {
  return (
    <div className="post-card">
      <Link to={`/posts/${post.id}`} className="post-card-link">
        <h2>{post.title}</h2>
        <p>{post.body.slice(0, 140)}...</p>
        <p>Read more</p>
      </Link>
    </div>
  );
}
