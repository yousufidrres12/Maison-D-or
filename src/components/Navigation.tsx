import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const isHome = location.pathname === "/";

  let navTextColor = isHome ? "text-primary-foreground" : "text-[#14213d]";
  if (isHome && isScrolled) {
    navTextColor = "text-[#14213d]";
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition-all duration-300 hover:text-accent ${
      isActive ? "text-accent" : navTextColor
    } relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 ${
      isActive ? "after:scale-x-100" : ""
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink 
            to="/" 
            className={`flex items-center space-x-2 text-2xl font-display font-bold ${navTextColor} hover:text-accent transition-colors duration-300`}
          >
            <span>Maison D'or</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={getNavLinkClass}
                end={item.path === "/"}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Reservation Button */}
          <div className="hidden md:block">
            <NavLink to="/reservations">
              <Button variant="copper" className="tracking-wide">
                Reserve Table
              </Button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${navTextColor} hover:text-accent transition-colors`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/60 z-40" onClick={() => setIsMobileMenuOpen(false)} />
            {/* Mobile Menu Card */}
            <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[90vw] max-w-sm bg-white rounded-2xl shadow-2xl z-50 p-6 animate-slide-down flex flex-col space-y-6">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-accent transition-colors text-2xl"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                type="button"
              >
                <X size={28} />
              </button>
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block text-lg font-semibold px-4 py-3 rounded-xl transition-all duration-300 text-center ${
                      isActive
                        ? "bg-accent text-accent-foreground shadow"
                        : "text-[#14213d] hover:bg-muted hover:text-accent"
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                  end={item.path === "/"}
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink to="/reservations" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="copper" className="w-full mt-2 tracking-wide text-lg py-3 rounded-xl">
                  Reserve Table
                </Button>
              </NavLink>
            </div>
            <style>{`
              @keyframes slide-down {
                0% { opacity: 0; transform: translate(-50%, -30px); }
                100% { opacity: 1; transform: translate(-50%, 0); }
              }
              .animate-slide-down { animation: slide-down 0.3s cubic-bezier(.4,0,.2,1) both; }
            `}</style>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;