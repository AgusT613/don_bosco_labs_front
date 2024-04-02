import { About } from './components/Home/About'
import { Booking } from './components/Home/Booking'
import { Footer } from './components/Footer'
import { Galery } from './components/Home/Galery'
import { Hero } from './components/Home/Hero'
import { NavBar } from './components/Home/NavBar'
import { TimeLine } from './components/Home/TimeLine'

function App () {
  return (
    <div id='home'>
      <NavBar />
      <main className='mx-auto w-10/12 flex gap-16 flex-col pt-20 small-mobile:w-full small-mobile:pt-16 large-mobile:w-full large-mobile:pt-16 big-mobile:pt-16 big-mobile:w-full'>
        <Hero />
        <About />
        <Galery />
        <TimeLine />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}

export default App
