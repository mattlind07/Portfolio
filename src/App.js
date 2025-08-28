import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './components/About.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './components/Resume.jsx';
import Contact from './pages/Contact.jsx';
import Landing from './pages/Landing.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
