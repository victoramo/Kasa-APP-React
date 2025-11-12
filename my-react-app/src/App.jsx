import { Routes, Route } from "react-router-dom";

// Composants communs
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

// Pages
import Home from "./Page/Home";
import About from "./Page/About";
import Accommodation from "./Page/Accommodation";
import NotFound from "./Page/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
