import "./App.css";

import { AppRoutes } from "./routes/AppRoutes";

import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
