import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoWhite from "@/assets/logo-white.png";

const navLinks = [
  { label: "Program", href: "/program-overview" },
  { label: "Models", href: "/partner-types" },
  { label: "Tiers", href: "/tiers" },
  { label: "ROI", href: "/calculator" },
  { label: "Success", href: "/success-stories" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "py-4 bg-background/80 backdrop-blur-2xl border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoWhite} alt="AIWO Partners" className="h-8 md:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.href
                    ? "text-white bg-white/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="text-sm text-white/60 hover:text-white transition-colors">
              Contact
            </Link>
            <Link
              to="/apply"
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #1A237E 0%, #0468CD 100%)',
                boxShadow: '0 4px 20px rgba(26, 35, 126, 0.3)'
              }}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl transition-colors ${
                      location.pathname === link.href
                        ? "text-white bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ))}
                <div className="pt-4">
                  <Link
                    to="/apply"
                    className="block w-full py-4 rounded-xl text-center font-semibold text-white"
                    style={{ background: 'linear-gradient(135deg, #1A237E 0%, #0468CD 100%)' }}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
