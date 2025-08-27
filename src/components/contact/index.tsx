import { BiLogoWhatsapp } from "react-icons/bi"

const Contact = () => {
  return (
    <section className="text-center text-white px-4 mx-auto max-w-[1250px] mb-[48px]">
      <h2 className="text-[24px] md:text-[48px] font-medium mb-5 md:mb-10">Hemen Teklif Al</h2>
      <p className="mb-4 md:text-[24px]">
        Teklif almak tamamen ücretsizdir ve hiçbir ek taahhüt içermez.
        Profesyonel ekibimiz sizin için en uygun stratejiyi oluşturmak üzere sizi bilgilendirecektir.
      </p>
      <p className="text-center md:text-[24px] xl:flex flex-wrap gap-4 justify-between xl:mt-10">
        <span className="block shrink-0">
          Bizi arayın: <a className="text-blue-500" href="tel:05522130004">+90 552 213 00 04</a>
        </span>
        <span className="flex justify-center items-center gap-2 shrink-0">
          Whatsappdan ulaşın: <a className="text-blue-500" href="tel:05522130004"><BiLogoWhatsapp className="w-5 h-5" /></a>
        </span>
        <span className="block shrink-0">
          Mail atın: <a className="text-blue-500" href="mailto:berksysl.g@gmail.com">berksysl.g@gmail.com</a>
        </span>
      </p>
      <h1 className="mt-10 text-[32px] md:text-[42px] lg:text-[48px] xl:text-[58px] font-bold">SOYSAL MEDIA</h1>
    </section>
  )
}

export default Contact
