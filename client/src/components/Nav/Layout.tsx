import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode; // Specify children prop type
}

const Nav: React.FC = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/confession">Confession</Link>
      </li>
      <li>
        <Link to="/misdemeanours">Misdemeanours</Link>
      </li>
    </ul>
  </nav>
);

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <header>
      <h1>Fakelandia Government</h1>
      <Nav />
    </header>
    <main>{children}</main>
    <footer>&copy; Kalyani</footer>
  </div>
);

export default Layout;
