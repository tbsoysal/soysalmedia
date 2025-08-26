const Whyus = () => {
  return (
    <section className="px-4 w-fit lg:max-w-[1300px] lg:w-auto mx-auto mb-4">
      <div className="h-[11px] bg-transparent border-t-[0.5px] border-t-[#232c3e] rounded-[16px]"></div>
      <div className="lg:flex items-center justify-between w-[90%] mx-auto">
        <div className="px-4 pt-6 pb-8 text-white text-center lg:max-w-[600px] lg:text-start">
          <h2 className="mb-4 text-[24px] font-medium md:text-[48px] lg:text-[56px] md:max-w-[600px] lg:max-w-[1024px] mx-auto">Sadece Web Sitesi Değil, Dijital Strateji</h2>
          <p className="md:text-[24px] max-w-[320px] md:max-w-[500px] lg:max-w-[900px] mx-auto">Size bir web sitesi yapıp bırakmıyoruz; içerik planı, SEO ve dijital pazarlama entegrasyonlarıyla markanızı büyütmenize destek oluyoruz.</p>
        </div>
        <img className="hidden lg:block h-[600px]" src="./mockup.png" />
      </div>
      <div className="h-[11px] bg-transparent border-b-[0.5px] border-b-[#232c3e] rounded-[16px]"></div>
    </section>
  )
}

export default Whyus
