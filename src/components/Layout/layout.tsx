import type { ReactNode } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/">Heimasíða</Link>
          <Link to="/posts">Allir póstar</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>Contact info:</p>
        <p>+354-6912345</p>
      </footer>
    </div>
  );
}
