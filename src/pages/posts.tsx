import { useEffect, useState } from "react";
import Card from "../components/Card/card";
import "./pages.style.css";
import type { Post } from "../utils";

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[] | []>([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageSize}`
        );
        const data: Post[] = await response.json();
        setPosts(data);
      } catch {
        setError("Villa kom upp!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  return (
    <div style={{ display: "flex", width: "100vw", flexDirection: "column" }}>
      <h1>Posts</h1>
      <div>
        {isLoading ? (
          <p>Hleð Pósta...</p>
        ) : (
          <div className="post-list">
            {posts.map((p) => (
              <Card post={p} />
            ))}
          </div>
        )}
        {error && <div>{error}</div>}
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous page
        </button>
        <p>Page: {page}</p>
        <button onClick={() => setPage(page + 1)}>Next page</button>
      </div>
    </div>
  );
}
