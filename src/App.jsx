import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Education, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Resume from "./components/Resume";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero /> 
        </div>
        <About />
        <Education /> 
        <Works />
        <Tech />
        <Experience />
        <Resume />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
