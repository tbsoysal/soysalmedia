import { useEffect, useRef } from "react"
import Typed from "typed.js"
import CtaButton from "./CtaButton";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['tasarlar.', 'dijitale taşır.', 'gelceğe hazırlar.'],
      typeSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    }
  }, [])

  return (
    <section className="relative px-[16px] mb-10">
      {/* Mobile Background Image */}
      <img src="https://proscom.ru/_next/static/media/main-bg-375.84ddc68f.jpg" className="absolute md:hidden top-0 right-0 left-0 z-[-2]" />
      {/* Web Background Image */}
      <img src="https://proscom.ru/_next/static/media/main-bg-768.1a182f30.jpg" className="hidden md:block absolute top-[-10%] right-0 left-0 z-[-2]" />
      {/* Background Light Effect */}
      <span className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-[50%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(52,81,212,0.19)_0%,rgba(115,115,115,0)_100%)] z-[-1] '></span>
      {/* Heading Text */}
      <div className="h-[60vh] md:h-[80vh] lg:h-[100vh] lg:pb-15 flex justify-center items-center">
        <h1 className="sm:text-[54px] sm:leading-[60px] md:text-[64px] md:leading-[70px] lg:text-[115px] lg:leading-[115px] leading-[35px] text-center text-[32px] font-[700] text-white z-[-2]">Soysal Media<br />işinizi <span ref={el} /></h1>
      </div>

      <p className="lg:max-w-[600px] lg:text-[24px] lg:mx-auto text-white text-center text-[16px] mb-5">Soysal Media, markanıza özel web tasarım, sosyal medya yönetimi ve dönüşüm odaklı dijital çözümler sunar.</p>
      <div className="flex flex-col gap-[10px] md:flex-row md:max-w-[600px] md:mx-auto">
        <CtaButton buttonType="primary" />
        <CtaButton buttonType="secondary" />
      </div>
    </section>
  )
}

export default Hero
