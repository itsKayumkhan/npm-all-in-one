import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navlinks = [
    { routes: "/", name: "Home" },
    { routes: "/about", name: "About" },
    { routes: "/contact", name: "Contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4  w-full ">
      <div className="nav-logo">
        <h1 className="font-bold text-2xl text-white ">NPM Add-on Builder</h1>
      </div>
      <div className="nav-links flex space-x-4">
        {navlinks.map((link) => (
          <Link
            to={link.routes}
            key={link.name}
            className="px-4 py-2 text-white rounded-md "
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
