import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./components/Book/Book";
import Header from './components/Header'
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
