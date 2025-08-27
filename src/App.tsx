import Hero from '@/components/hero';
import NavBar from '@/components/navbar';
import Testimonials from '@/components/testimonials';
import Services from '@/components/services';
import Whyus from '@/components/whyus';
import Projects from './components/projects';
import Faq from './components/faq';
import Contact from './components/contact';

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
      <Contact />
    </>
  )
}

export default App
