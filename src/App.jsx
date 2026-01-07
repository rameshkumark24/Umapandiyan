import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import DailyMiraclePractice from '@/pages/DailyMiraclePractice'; // Updated to use @ alias for consistency if needed, or keep './pages'
import Testimonials from '@/pages/Testimonials';
import Contact from '@/pages/Contact';
import BookSession from '@/pages/BookSession';
import Terms from '@/pages/Terms';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            
            {/* Added the new route here */}
            <Route path="/daily-miracle-practice" element={<DailyMiraclePractice />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-session" element={<BookSession />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
