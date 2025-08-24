const Testimonials = () => {
  const logos = [
    "./kilincyapi.png",
    "./peracity.png",
    "./grandardahan.png"
  ]
  return (
    <section className="mb-10 md:mb-11 lg:mb-[102px]">
      <h2 className="text-white text-center text-[18px] md:text-[32px] font-medium mb-8 md:mb-10 lg:mb-[64px]">Yüzlerce işletme bize güveniyor.</h2>
      <div className="flex overflow-hidden max-w-[100vw] mx-auto">
        <div className="shrink-0 flex justify-between items-center gap-3 animate-scroll">
          {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, id) => (
            <img
              key={id}
              src={logo}
              alt={`logo-${id}`}
              className="h-30 inline-block"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
