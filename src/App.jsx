import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import AnimatedCursor from './components/AnimatedCursor';
import AIChatbot from './components/AIChatbot';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Admin from './pages/Admin';
import AnalyticsTracker from './pages/Analytics';
import SEO from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter basename="/programmer">
          <SEO />
          <AnalyticsTracker />
          <LoadingScreen />
          <AnimatedCursor />
          <div className="bg-[#050816] text-white overflow-x-hidden transition-colors duration-300">
            <AnimatedBackground />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
            <Footer />
            <AIChatbot />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;