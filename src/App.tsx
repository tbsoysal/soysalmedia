import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <main>
      {/* <ComingSoon /> */}
      {/* Mobile Background Image */}
      <img src="https://proscom.ru/_next/static/media/main-bg-375.84ddc68f.jpg" className="absolute md:hidden top-0 right-0 left-0 z-[-2]" />
      {/* Web Background Image */}
      <img src="https://proscom.ru/_next/static/media/main-bg-768.1a182f30.jpg" className="hidden md:block absolute top-[-10%] right-0 left-0 z-[-2]" />
      {/* Background Light Effect */}
      <span className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-[50%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(52,81,212,0.19)_0%,rgba(115,115,115,0)_100%)] z-[-1] '></span>
      <NavBar />
      <Hero />
      <Testimonials />
    </main>
  )
}

export default App
