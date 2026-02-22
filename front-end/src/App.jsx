import Navbar from "./layouts/Navbar"
import Hero from "./sections/Hero"
import WhyUs from "./sections/WhyUs"


function App() {

  return (
    <>
      <Navbar />
        <main>
          <Hero />
          <WhyUs />
        </main>
    </>
  )
}

export default App
