import Login from "./pages/login/Login";
import Homepage from "./pages/homepage/Homepage";
import Newblog from "./pages/newblog/Newblog";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bloginfo from "./pages/bloginfo/Bloginfo";
import Navbar from "./components/navbar/Navbar";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route
          path="/register"
          element={user ? <Homepage /> : <Register />}
        />
        <Route path="/login" element={user ? <Homepage /> : <Login />} />
        <Route path="/post/:id" element={<Bloginfo />} />
        <Route
          path="/newblog"
          element={user ? <Newblog /> : <Login />}
        />
        <Route
          path="/settings"
          element={user ? <Settings /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
