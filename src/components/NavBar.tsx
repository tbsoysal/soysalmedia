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
    <section style={{ background: scrolled ? 'linear-gradient(to bottom, #020818FF 0%,#020818CC 50%, #02081800 100%)' : 'transparent' }} className="flex justify-between items-center p-5 border-b-[1px] border-gray-600 rounded-b-md md:mx-[52px] pt-[22px] sticky top-0 w-full z-50">
      <a className="text-white font-bold text-[18px]" href="#">SOYSAL MEDIA</a>
      <div className="flex items-center gap-2">
        <a href="#" className="hidden md:block px-5 py-3 bg-linear-to-r from-[#2c55de] to-[#5243ad] text-white rounded-[6px]">Bize Ulaşın</a>
        <a className="w-10 h-10 bg-linear-to-r from-[#2c55de] to-[#5243ad] rounded-full flex items-center justify-center md:hidden" href="tel:05522130004"><img src="./whatsappicon.svg" /></a>
        <a href="#" className="flex flex-col p-3">
          <span className="w-[18px] h-[2px] mb-1 bg-white"></span>
          <span className="w-[18px] h-[2px] mb-1 bg-white"></span>
          <span className="w-[18px] h-[2px] bg-white"></span>
        </a>
      </div>
    </section>
  )
}

export default NavBar
