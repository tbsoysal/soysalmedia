import WhatsappButton from "./WhatsappButton";
import HamburgerButton from "./HamburgerButton";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0)
        setIsScrolled(true);
      else
        setIsScrolled(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  })

  return (
    <nav className={`fixed top-0 left-0 right-0 ${isScrolled ? 'bg-gradient-to-b from-[#020818] via-50% via-[#020818] to-transparent' : 'bg-transparent'} transition duration-200 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-700 rounded-md">
        <div className="flex justify-between items-center h-16">
          {/* Logo Text */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white hover:text-blue-400 transition duration-200 transform hover:scale-110"><a href='index.html'>SOYSAL MEDIA</a></h1>
          </div>

          <div className="flex items-center space-x-4">
            <WhatsappButton />
            <HamburgerButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
