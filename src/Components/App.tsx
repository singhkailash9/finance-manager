import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Menu from "./Menu";
import UserDetails from "./UserDetails";

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
