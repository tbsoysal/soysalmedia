const Testimonials = () => {
  const logos = [
    "./kilincyapi.png",
    "./peracity.png",
    "./buyukardahan.png"
  ]
  return (
    <section className="mb-10">
      <h2 className="text-white text-center text-[18px] font-medium mb-5">Yüzlerce işletme bizlere güveniyor.</h2>
      <div className="flex overflow-hidden max-w-[700px] mx-auto">
        <div className="shrink-0 flex justify-between items-center gap-3 animate-scroll">
          {[...logos, ...logos, ...logos].map((logo, id) => (
            <img
              key={id}
              src={logo}
              alt={`logo-${id}`}
              className="h-12 inline-block"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
