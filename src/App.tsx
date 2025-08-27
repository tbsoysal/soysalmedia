import Hero from '@/components/hero';
import NavBar from '@/components/navbar';
import Testimonials from '@/components/testimonials';
import Services from '@/components/services';
import Whyus from '@/components/whyus';
import Projects from './components/projects';
import Faq from './components/faq';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Testimonials />
      <Services />
      <Whyus />
      <Projects />
      <Faq />
    </>
  )
}

export default App
