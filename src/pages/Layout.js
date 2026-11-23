import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import useScrollReveal from "../hooks/useScrollReveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../components/Icons";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../data/links";
import "./Layout.css";

const Layout = () => {
  const { pathname, hash } = useLocation();
  useScrollReveal(pathname);

  // Links like /projects#status-hawk jump to that section; otherwise
  // start each page at the top instead of keeping the old scroll position.
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        // Images above the target can finish loading after we scroll and push it
        // down, so re-align as they load (only briefly, so we never fight the user).
        const realign = () => el.scrollIntoView({ behavior: "instant" });
        const pending = [...document.querySelectorAll("main img")].filter((img) => !img.complete);
        pending.forEach((img) => img.addEventListener("load", realign, { once: true }));
        const stop = setTimeout(
          () => pending.forEach((img) => img.removeEventListener("load", realign)),
          2000
        );
        return () => {
          clearTimeout(stop);
          pending.forEach((img) => img.removeEventListener("load", realign));
        };
      }
    }
    // "instant" so the new page doesn't visibly scroll up (html has smooth scrolling on)
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

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
