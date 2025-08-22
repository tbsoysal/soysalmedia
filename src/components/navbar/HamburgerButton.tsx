import { useState } from "react";

const HamburgerButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <button
      onClick={toggleMenu}
      className="p-2 rounded-md text-white hover:text-gray-300 hover:bg-gray-800 transition duration-200 cursor-pointer"
    >
      <div className="w-6 h-6 relative flex flex-col justify-center items-center">
        <span
          className={`w-6 h-[2px] bg-current transform transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
        />
        <span
          className={`w-6 h-[2px] bg-current mt-1.5 transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
            }`}
        />
        <span
          className={`w-6 h-[2px] bg-current mt-1.5 transform transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
        />
      </div>
    </button>
  )
}

export default HamburgerButton
