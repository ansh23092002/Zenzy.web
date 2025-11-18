
import './App.css'
import About from './components/About'
import Feactures from './components/Feactures'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Story from './components/Story'
import Contect from './components/Contect'
import Demo from './components/demo'

function App() {


  return (
    
    <main className='relative min-h-screen w-screen overflow-x-hidden '>
      <Navbar/>
      <Hero/>
      <About/>
      <Feactures/>
      <Story/>
      <Contect/>
      <Footer/>
    </main>
   
    
  )
}

export default App
