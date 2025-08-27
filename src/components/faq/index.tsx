import FaqItem from "./FaqItem"

const Faq = () => {
  const faqData = [
    {
      question: "Soysal Media hangi hizmetleri sunuyor?",
      answer: "Web tasarım, sosyal medya yönetimi, dijital reklam kampanyaları ve markalar için görsel/işitsel içerik üretimi hizmetleri sunuyoruz.",
    },
    {
      question: "Web sitemi ne kadar sürede teslim alabilirim?",
      answer: "Projelerin süresi, kapsamına göre değişiklik gösterebilir. Basit bir kurumsal web sitesi 1–2 hafta içinde, daha kapsamlı projeler ise 3–6 hafta arasında teslim edilebilir.",
    },
    {
      question: "Web sitesi ücretleri nasıl belirleniyor?",
      answer: "Fiyatlandırma, sitenin sayfa sayısı, özel tasarım gereksinimleri, ek entegrasyonlar (ör. rezervasyon, ödeme sistemleri) gibi unsurlara göre belirlenir. İlk görüşmede size özel bir teklif sunuyoruz.",
    },
    {
      question: "Ödeme yöntemleri nelerdir?",
      answer: "Proje başlamadan önce belirli bir ön ödeme alınır. Kalan kısım proje tesliminde veya aylık hizmetlerde düzenli faturalandırma ile ödenir.",
    },
  ]
  return (
    <section className="px-4 mb-[48px] md:max-w-[80%] mx-auto">
      <h2 className='relative text-center text-[24px] md:text-[48px] lg:text-[56px] font-[500] text-white mb-5'>Sıkça Sorulan Sorular</h2>
      <div className="h-[11px] bg-transparent border-t-[0.5px] border-t-[#232c3e] rounded-[16px]"></div>
      <div>
        {
          faqData.map((faq, index) => {
            return <FaqItem index={index} question={faq.question} answer={faq.answer} />
          })
        }
      </div>
      <div className="h-[11px] bg-transparent border-b-[0.5px] border-b-[#232c3e] rounded-[16px]"></div>
    </section>
  )
}

export default Faq
