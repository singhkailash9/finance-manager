import Footer from "./Footer";
import Header from "./Header";
// import Login from "./Login";
import Menu from "./Menu";
import UserDetails from "./UserDetails";
import "../style/style.css";
import "../style/app.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      {/* <Login /> */}
      <div id="finance-app">
        <Menu />
        <UserDetails />
      </div>
      <Footer />
    </div>
  );
}

export default App;
