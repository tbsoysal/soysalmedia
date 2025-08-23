import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import "swiper/css";
import "swiper/css/scrollbar"
import Slide from './Slide';
import { MonitorSmartphone, Megaphone, Globe, Palette } from 'lucide-react';

const Services = () => {
  const slideStyles = 'block max-w-[306px] !h-[288px] p-[31px] pb-[39px] border-[0.5px] border-[#49566f] rounded-[8px] bg-transparent'
  return (
    <section className="px-4 mb-10">
      <h2 className="text-center text-[24px] font-[500] text-white mb-5">Dijital dünyada markanızı güçlendiren çözümler</h2>
      {/* Mobile Slider */}
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={12}
        slidesPerView={'auto'}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        scrollbar={{ draggable: true, hide: false }}
        loop={true}
        className='md:!hidden'
      >
        <SwiperSlide className={slideStyles}>
          <Slide icon={<MonitorSmartphone className='mb-6 w-[56px] h-[56px] text-[#3777b8]' />} title='Web Tasarım & Geliştirme' text='Modern, hızlı ve mobil uyumlu web siteleri tasarlıyor; markanızı dijitalde güçlü bir vitrine kavuşturuyoruz.' />
        </SwiperSlide>
        <SwiperSlide className={slideStyles}>
          <Slide icon={<Megaphone className='mb-6 w-[56px] h-[56px] text-[#3777b8]' />} title='Sosyal Medya Yönetimi' text='Markanız için özgün içerikler üretiyor, sosyal medya hesaplarınızı düzenli ve profesyonel şekilde yönetiyoruz.' />
        </SwiperSlide>
        <SwiperSlide className={slideStyles}>
          <Slide icon={<Palette className='mb-6 w-[56px] h-[56px] text-[#3777b8]' />} title='Grafik Tasarım' text='Logo, afiş, katalog ve sosyal medya postları için yaratıcı tasarımlar sunarak görsel kimliğinizi güçlendiriyoruz.' />
        </SwiperSlide>
        <SwiperSlide className={slideStyles}>
          <Slide icon={<Globe className='mb-6 w-[56px] h-[56px] text-[#3777b8]' />} title='Dijital Reklam Yönetimi' text='Facebook, Instagram ve Google Ads kampanyalarınızı optimize ederek doğru hedef kitleye ulaştırıyoruz.' />
        </SwiperSlide>
      </Swiper>
      {/* Desktop Grid */}
      <div className='hidden md:grid max-w-[800px] mx-auto grid-cols-2 grid-rows-2'>
        <Slide icon={<MonitorSmartphone className='mb-6 w-[56px] h-[56px] text-[#3777b8]' />} title='Web Tasarım & Geliştirme' text='Modern, hızlı ve mobil uyumlu web siteleri tasarlıyor; markanızı dijitalde güçlü bir vitrine kavuşturuyoruz.' />
        <Slide icon={<Megaphone className='mb-6 w-[56px] h-[56px] text-[#3777b8]' />} title='Sosyal Medya Yönetimi' text='Markanız için özgün içerikler üretiyor, sosyal medya hesaplarınızı düzenli ve profesyonel şekilde yönetiyoruz.' />
        <Slide icon={<Palette className='mb-6 w-[56px] h-[56px] text-[#3777b8]' />} title='Grafik Tasarım' text='Logo, afiş, katalog ve sosyal medya postları için yaratıcı tasarımlar sunarak görsel kimliğinizi güçlendiriyoruz.' />
        <Slide icon={<Globe className='mb-6 w-[56px] h-[56px] text-[#3777b8]' />} title='Dijital Reklam Yönetimi' text='Facebook, Instagram ve Google Ads kampanyalarınızı optimize ederek doğru hedef kitleye ulaştırıyoruz.' />
      </div>
    </section>
  )
}

export default Services
