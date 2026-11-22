import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../components/Icons";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../data/links";
import "./Layout.css";

const Layout = () => {
  const { pathname } = useLocation();

  // Start each page at the top instead of keeping the previous scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="layout">
      <Navbar />
      <main className="page-content">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <p>&copy; {new Date().getFullYear()} Matthew Lindsey. All rights reserved.</p>
          <div className="footer-links">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
