import { Hero } from '../components/sections/Hero'
import { Problem } from '../components/sections/Problem'
import { HowItWorks } from '../components/sections/HowItWorks'
import { Features } from '../components/sections/Features'
import { Pricing } from '../components/sections/Pricing'
import { Team } from '../components/sections/Team'

export function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Pricing />
      <Team />
    </>
  )
}
