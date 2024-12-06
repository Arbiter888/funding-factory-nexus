import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
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
          
          <div className="hidden sm:flex space-x-8">
            <NavLink to="/" current={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/seed-funding" current={location.pathname === "/seed-funding"}>Seed Funding</NavLink>
            <NavLink to="/angel-syndicate" current={location.pathname === "/angel-syndicate"}>Angel Syndicate</NavLink>
            <NavLink to="/about-us" current={location.pathname === "/about-us"}>About Us</NavLink>
          </div>
        </div>
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