import "./Header.css";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
// import Store from "../Store";
// import Home from "../Home";
// import About from "../About";

const HeaderNavLinks = () => {
  return (
    <Nav className="m-auto">
      <Nav.Link href="/" className="nav-link">
        HOME
      </Nav.Link>
      <Nav.Link href="/store" className="nav-link">
        STORE
      </Nav.Link>
      <Nav.Link href="/about" className="nav-link">
        ABOUT
      </Nav.Link>
    </Nav>
  );
};

// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route to="/" exact element={<Home />} />
//         <Route to="/about" element={<About />} />
//         <Route to="/store" element={<Store />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

export default HeaderNavLinks;
// export { AppRouter };
