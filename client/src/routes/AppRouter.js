import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Store from "../pages/Store";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// export const AppRouter = () => {
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/store" element={<Store />} />
//     </Routes>
//   </BrowserRouter>;
// };

export const AppRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/store", element: <Store /> },
  { path: "/about", element: <About /> },
]);
