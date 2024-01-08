import AboutBattalion from './components/AboutBattalion/AboutBattalion';
import Footer from './components/Footer/Footer';
import Fundraising from './components/Fundraising/Fundraising';
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
        <Fundraising />
        <Product />
        <AboutBattalion />
        <ShootingRange />
        <Sharing />
      </main>
      <Footer />
    </>
  )
}

export default App
