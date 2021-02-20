import React from 'react';

import NavbarApp from './Navbar';

function Layout({ children }) {
  return (
    <>
      <NavbarApp />
      <main>{children}</main>
      <footer className="text-center p-3 bg-info text-white" >
        Copyright © 2021
      </footer>
    </>
  );
}
export default Layout;