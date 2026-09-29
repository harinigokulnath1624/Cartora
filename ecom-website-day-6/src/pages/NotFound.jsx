import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="state">
      <h1>Page not found</h1>
      <p>That link doesn't lead anywhere.</p>
      <Link to="/" className="btn">Back to home</Link>
    </section>
  );
}
