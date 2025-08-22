import WhatsappButton from "./WhatsappButton";
import HamburgerButton from "./HamburgerButton";

const Navbar: React.FC = () => {

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-b from-[#020818] via-60% via-[#020818] to-transparent z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-700 rounded-md">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white hover:text-blue-400 transition duration-200 transform hover:scale-110"><a href='index.html'>SOYSAL MEDIA</a></h1>
          </div>

          <div className="flex items-center space-x-4">
            {/* Call to action button */}
            <WhatsappButton />
            {/* Hamburger Button */}
            <HamburgerButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
