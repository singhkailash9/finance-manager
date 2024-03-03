import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Menu from "./Menu";
import UserDetails from "./UserDetails";
import Profile from './Profile';
import Visual from './Visual';
import "../style/style.css";
import "../style/app.css";

function AppWrapper() {
  let location = useLocation();

  // const isLoginPage = location.pathname === "/login" || location.pathname === "/";
  const isLoginPage = location.pathname === "/login";

  return (<div className="app-container">
    <Header />
    <div id="finance-app">
      {!isLoginPage && <Menu />}
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/*User details as home page for testing*/}
        <Route path="/" element={<UserDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/data-manager" element={<UserDetails />} />
        <Route path="/visualise" element={<Visual />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    <Footer />
  </div>);
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<AppWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
