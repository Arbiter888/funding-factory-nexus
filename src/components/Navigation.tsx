import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white backdrop-blur-md border-b border-primary/20" : "bg-white"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-600">
            Cowboy Capital
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex space-x-8">
            <NavLink to="/" current={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/seed-funding" current={location.pathname === "/seed-funding"}>Seed Funding</NavLink>
            <NavLink to="/angel-syndicate" current={location.pathname === "/angel-syndicate"}>Angel Syndicate</NavLink>
            <NavLink to="/about-us" current={location.pathname === "/about-us"}>About Us</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="sm:hidden p-2 text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-black">
              <MobileNavLink to="/" current={location.pathname === "/"} onClick={() => setMobileMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/seed-funding" current={location.pathname === "/seed-funding"} onClick={() => setMobileMenuOpen(false)}>
                Seed Funding
              </MobileNavLink>
              <MobileNavLink to="/angel-syndicate" current={location.pathname === "/angel-syndicate"} onClick={() => setMobileMenuOpen(false)}>
                Angel Syndicate
              </MobileNavLink>
              <MobileNavLink to="/about-us" current={location.pathname === "/about-us"} onClick={() => setMobileMenuOpen(false)}>
                About Us
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, current }: { to: string; children: React.ReactNode; current: boolean }) => (
  <Link
    to={to}
    className={cn(
      "transition-colors duration-200 hover:text-primary",
      current ? "text-primary" : "text-muted-foreground"
    )}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ 
  to, 
  children, 
  current,
  onClick 
}: { 
  to: string; 
  children: React.ReactNode; 
  current: boolean;
  onClick: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={cn(
      "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
      current 
        ? "bg-primary/10 text-primary" 
        : "text-black hover:bg-primary/5 hover:text-primary"
    )}
  >
    {children}
  </Link>
);