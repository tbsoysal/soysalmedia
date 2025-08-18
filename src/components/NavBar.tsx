import { useEffect, useState } from "react"


const NavBar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Navigation Container
    <section style={{ background: scrolled ? 'linear-gradient(to bottom, #020818FF 0%,#020818CC 50%, #02081800 100%)' : 'transparent' }} className="fixed top-0 left-0 right-0 w-full z-50">
      <div className="flex justify-between items-center p-[16px] border-b-[1px] border-gray-600 rounded-b-md md:mx-[52px] pt-[22px]">
        {/* Title */}
        <a className="text-white font-bold text-[18px]" href="#">SOYSAL MEDIA</a>
        <div className="flex items-center gap-2">
          {/* Desktop CTA Button */}
          <a href="#" className="hidden md:block px-5 py-3 bg-linear-to-r from-[#2c55de] to-[#5243ad] text-white rounded-[6px]">Bize Ulaşın</a>
          {/* Mobile CTA Button */}
          <a className="w-10 h-10 bg-linear-to-r from-[#2c55de] to-[#5243ad] rounded-full flex items-center justify-center md:hidden" href="tel:05522130004"><img src="./whatsappicon.svg" /></a>
          {/* Hamburger Icon */}
          <a href="#" className="flex flex-col gap-1.5 justify-between p-3">
            <span className="block w-[18px] h-[2px] bg-white"></span>
            <span className="block w-[18px] h-[2px] bg-white"></span>
            <span className="block w-[18px] h-[2px] bg-white"></span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default NavBar
