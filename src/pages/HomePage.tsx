import { Cases } from '../components/Cases'
import { CTA } from '../components/CTA'
import { DeliveryLoop } from '../components/DeliveryLoop'
import { FitCheck } from '../components/FitCheck'
import { HeroSection } from '../components/HeroSection'
import { LogicMoat } from '../components/LogicMoat'
import { OrgChart } from '../components/OrgChart'
import { PainPoints } from '../components/PainPoints'
import { Timeline } from '../components/Timeline'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <Timeline />
      <PainPoints />
      <FitCheck />
      <DeliveryLoop />
      <OrgChart />
      <Cases />
      <LogicMoat />
      <CTA />
    </>
  )
}
