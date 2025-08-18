
const Testimonials = () => {
  const logos = [
    "./kilincyapi.png",
    "./peracity.png",
    "./buyukardahan.png"
  ]
  return (
    <section>
      <h2 className="text-white text-center text-[18px] font-medium">Yüzlerce işletme bizlere güveniyor.</h2>
      <div className="overflow-hidden w-full py-[20px]">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...logos, ...logos].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`logo-${idx}`}
              className="h-12 mx-2 inline-block"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
