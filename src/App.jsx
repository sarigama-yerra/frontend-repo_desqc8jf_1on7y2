import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Classes from './components/Classes'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Classes />
      <Pricing />
      <Contact />
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} ZenFlow Yoga • Breathe. Move. Restore.
        </div>
      </footer>
    </div>
  )
}

export default App
