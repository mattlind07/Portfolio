import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main className="page-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
