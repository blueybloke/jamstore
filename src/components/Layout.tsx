import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="">
      <header className="">Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
