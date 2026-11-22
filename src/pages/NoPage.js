import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <section className="page section-header" style={{ paddingTop: 40 }}>
      <p style={{ fontSize: "5rem", fontWeight: 800, color: "var(--accent)", margin: 0, lineHeight: 1 }}>404</p>
      <h1 className="section-title" style={{ marginTop: 16 }}>Page not found</h1>
      <p className="section-subtitle">The page you’re looking for doesn’t exist or has moved.</p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: 32 }}>
        Back to Home
      </Link>
    </section>
  );
};

export default NoPage;
