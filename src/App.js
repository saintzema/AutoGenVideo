import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Affiliates from "./pages/Affiliates";
import Pricing from "./components/PricingSection";
import FAQ from "./components/FAQSection";
import SignUpPage from "./components/SignUpPage";
import { Switch as HeadlessSwitch } from "@headlessui/react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogout = () => {
    setIsLoggedIn(false); // Set to false on logout
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Set to true on login
  };
  return (
    <Router>
      <div className="font-sans relative overflow-hidden min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400 to-indigo-500 opacity-5 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/affiliates" element={<Affiliates />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/signup" component={SignUpPage}/>
          </Routes>      
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
