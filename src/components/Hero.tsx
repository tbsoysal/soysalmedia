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
    <section className="px-[16px]">
      <h1 className="sm:text-[54px] sm:leading-[60px] md:text-[64px] md:leading-[70px] md:mt-[200px] lg:text-[80px] lg:leading-[85px] lg:mt-[300px] lg:h-[70vh] h-[120px] leading-[35px] text-center text-[32px] px-1.5 font-[900] text-white mt-[140px] z-[-2]">Soysal Media<br />işinizi <span ref={el} /></h1>
      <p className="md:mt-[200px] lg:mt-0 lg:max-w-[600px] lg:text-[24px] lg:mx-auto text-white mt-[100px] text-center text-[16px]">Soysal Media, markanıza özel web tasarım, sosyal medya yönetimi ve dönüşüm odaklı dijital çözümler sunar.</p>
      <div className="mt-[30px] flex flex-col gap-[10px] md:flex-row md:max-w-[600px] md:mx-auto">
        <CtaButton buttonType="primary" />
        <CtaButton buttonType="secondary" />
      </div>
    </section>
  )
}

export default Hero
