import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/scrollbar"
import Slide from './Slide';
import { MonitorSmartphone, Megaphone, Globe, Palette } from 'lucide-react';

const Services = () => {
  const slideStyles = 'lg:!h-auto block max-w-[304px] !h-[288px] p-[31px] pb-[39px] border-[0.5px] border-[#49566f] rounded-[8px] bg-transparent'
  return (
    <section className="px-4 mb-10 relative">
      <h2 className="text-center text-[24px] md:text-[48px] lg:text-[56px] font-[500] text-white mb-5">Dijital Dünyada Markanızı Güçlendiren Çözümler</h2>
      {/* Mobile Slider */}
      <Swiper
        modules={[Scrollbar, Autoplay]}
        spaceBetween={12}
        slidesPerView={'auto'}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        scrollbar={{ draggable: true, hide: false }}
        loop={true}
        autoplay={{
          delay: 2000
        }}
        speed={800}
        className='md:!hidden'
      >
        <SwiperSlide className={slideStyles}>
          <Slide icon={<MonitorSmartphone className='mb-6 w-[56px] h-[56px] text-[#3777b8]' />} title='Web Tasarım & Geliştirme' text='Modern, hızlı ve mobil uyumlu web siteleri tasarlıyor; markanızı dijitalde güçlü bir vitrine kavuşturuyoruz.' />
        </SwiperSlide>
        <SwiperSlide className={slideStyles}>
          <Slide icon={<Megaphone className='mb-6 w-[56px] h-[56px] text-[#3777b8]' />} title='Sosyal Medya Yönetimi' text='Markanız için özgün içerikler üretiyor, sosyal medya hesaplarınızı düzenli ve profesyonel şekilde yönetiyoruz.' />
        </SwiperSlide>
        <SwiperSlide className={slideStyles}>
          <Slide icon={<Palette className='mb-6 w-[56px] h-[56px] text-[#3777b8]' />} title='Grafik Tasarım' text='Logo ve sosyal medya postları için yaratıcı tasarımlar sunarak görsel kimliğinizi güçlendiriyoruz.' />
        </SwiperSlide>
        <SwiperSlide className={slideStyles}>
          <Slide icon={<Globe className='mb-6 w-[56px] h-[56px] text-[#3777b8]' />} title='Dijital Reklam Yönetimi' text='Facebook, Instagram ve Google Ads kampanyalarınızı optimize ederek doğru hedef kitleye ulaştırıyoruz.' />
        </SwiperSlide>
      </Swiper>
      {/* Desktop Grid */}
      <div className='hidden md:grid lg:flex lg:h-auto mx-auto [grid-template-columns:repeat(2,304px)] gap-4 justify-center'>
        <div className={slideStyles}>
          <Slide icon={<MonitorSmartphone className='mb-6 w-[56px] h-[56px] text-[#3777b8]' />} title='Web Tasarım & Geliştirme' text='Modern, hızlı ve mobil uyumlu web siteleri tasarlıyor; markanızı dijitalde güçlü bir vitrine kavuşturuyoruz.' />
        </div>
        <div className={slideStyles}>
          <Slide icon={<Megaphone className='mb-6 w-[56px] h-[56px] text-[#3777b8]' />} title='Sosyal Medya Yönetimi' text='Markanız için özgün içerikler üretiyor, sosyal medya hesaplarınızı düzenli ve profesyonel şekilde yönetiyoruz.' />
        </div>
        <div className={slideStyles}>
          <Slide icon={<Palette className='mb-6 w-[56px] h-[56px] text-[#3777b8]' />} title='Grafik Tasarım' text='Logo, afiş, katalog ve sosyal medya postları için yaratıcı tasarımlar sunarak görsel kimliğinizi güçlendiriyoruz.' />
        </div>
        <div className={slideStyles}>
          <Slide icon={<Globe className='mb-6 w-[56px] h-[56px] text-[#3777b8]' />} title='Dijital Reklam Yönetimi' text='Facebook, Instagram ve Google Ads kampanyalarınızı optimize ederek doğru hedef kitleye ulaştırıyoruz.' />
        </div>
      </div>
    </section >
  )
}

export default Services
