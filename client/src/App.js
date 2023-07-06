import "../src/styles/styles.scss";
import { Footer, Navbar, Routing } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
