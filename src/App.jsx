import AboutBatalion from './components/AboutBatalion/AboutBatalion';
import Fundrising from './components/Fundrising/Fundrising';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ShootingRange from './components/ShootingRange/ShootingRange';

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Fundrising />
        <AboutBatalion />
        <ShootingRange />
      </main>
    </>
  )
}

export default App
