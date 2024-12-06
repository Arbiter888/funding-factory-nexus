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
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-semibold text-xl">
            Commonwealth Bridge Capital
          </Link>
          
          <div className="hidden sm:flex space-x-8">
            <NavLink to="/" current={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/seed-funding" current={location.pathname === "/seed-funding"}>Seed Funding</NavLink>
            <NavLink to="/angel-syndicate" current={location.pathname === "/angel-syndicate"}>Angel Syndicate</NavLink>
            <NavLink to="/investors" current={location.pathname === "/investors"}>Investors</NavLink>
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
      "transition-colors duration-200 hover:text-gray-600",
      current ? "text-gray-900" : "text-gray-500"
    )}
  >
    {children}
  </Link>
);