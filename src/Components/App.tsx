import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Menu from "./Menu";
import UserDetails from "./UserDetails";
import "../style/style.css"

function App() {
  return (
    <div className="app-container">
      <Header />
      <Login />
      <Menu />
      <UserDetails />
      <Footer />
    </div>
  );
}

export default App;
