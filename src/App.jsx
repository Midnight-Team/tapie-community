import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Write from "./pages/Write";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import Error404 from "./pages/404";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <style jsx>
        {`
          main {
            height: 80vh;
            padding: 5vh 4vw;
          }
        `}
      </style>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/write" element={<Write />} />
          <Route path="/details/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
