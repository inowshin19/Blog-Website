
import './App.css';
import Post from "./Post";
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
      <Routes>
          {/*Keeping the other Route iside one Route ensures that the header is same for all pages*/}

          <Route path='/' element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path="/login" element={<LoginPage />}/>
              <Route path="/register" element={<RegisterPage />}/>
          </Route>

      </Routes>
  );
}

export default App;
