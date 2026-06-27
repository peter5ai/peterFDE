import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { Timeline } from './components/Timeline'
import { PainPoints } from './components/PainPoints'
import { FitCheck } from './components/FitCheck'
import { DeliveryLoop } from './components/DeliveryLoop'
import { OrgChart } from './components/OrgChart'
import { Cases } from './components/Cases'
import { LogicMoat } from './components/LogicMoat'
import { CTA } from './components/CTA'

function App() {
  return (
    <div className="bg-luxury-gradient min-h-screen text-text">
      <Navbar />
      <main>
        <HeroSection />
        <Timeline />
        <PainPoints />
        <FitCheck />
        <DeliveryLoop />
        <OrgChart />
        <Cases />
        <LogicMoat />
        <CTA />
      </main>
    </div>
  )
}

export default App
