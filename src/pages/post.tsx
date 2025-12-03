import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Post, Comment } from "../utils";

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const commentResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );
        const postData: Post = await postResponse.json();
        const commentData: Comment[] = await commentResponse.json();
        setPost(postData);
        setComments(commentData);
      } catch {
        console.error("Villa");
      } finally {
        // Setja loading í false
      }
    };
    fetchData();
  }, [id]);
  if (!post) {
    return <div>Ekki tókst að ná í póstinn!</div>;
  }
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div style={{ border: "2px solid red", overflow: "hidden" }}>
        <h2>Commenta Kerfi</h2>
        {comments.length > 0 ? (
          <div
            style={{
              backgroundColor: "lightcyan",
              margin: "16px",
              padding: "16px",
              display: "flex",
              overflowX: "scroll",
              gap: "10px",
            }}
          >
            {comments.map((comment) => (
              <div>
                <h4>
                  "{comment.name}" said by {comment.email}
                </h4>
                <p>{comment.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Enginn komment fyrir þennan póst</p>
        )}
      </div>
    </div>
  );
}
