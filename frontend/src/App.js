import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <FloatingWA />
        <ScrollToTop />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
