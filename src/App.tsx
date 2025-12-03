import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";
import PostsPage from "./pages/posts";
import PostDetailPage from "./pages/post";
import NotFound from "./components/NotFound/notFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<div>Hello world!</div>} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
