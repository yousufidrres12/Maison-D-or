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
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4 pt-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground hover:bg-muted hover:text-accent"
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                  end={item.path === "/"}
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink to="/reservations" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="copper" className="w-full mt-4 tracking-wide">
                  Reserve Table
                </Button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;