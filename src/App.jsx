import AboutBatalion from './components/AboutBatalion/AboutBatalion';
import Footer from './components/Footer/Footer';
import Fundrising from './components/Fundrising/Fundrising';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Product from './components/Product/Product';
import Sharing from './components/Sharing/Sharing';
import ShootingRange from './components/ShootingRange/ShootingRange';

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Fundrising />
        <Product />
        <AboutBatalion />
        <ShootingRange />
        <Sharing />
      </main>
      <Footer />
    </>
  )
}

export default App
