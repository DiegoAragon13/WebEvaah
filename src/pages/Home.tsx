import { Hero } from '../components/sections/Hero'
import { Problem } from '../components/sections/Problem'
import { VideoShowcase } from '../components/sections/VideoShowcase'
import { ImageCarousel } from '../components/sections/ImageCarousel'
import { HowItWorks } from '../components/sections/HowItWorks'
import { Features } from '../components/sections/Features'
import { AboutUs } from '../components/sections/AboutUs'
import { Testimonial } from '../components/sections/Testimonial'
import { Pricing } from '../components/sections/Pricing'

export function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <VideoShowcase />
      <ImageCarousel />
      <HowItWorks />
      <Features />
      <AboutUs />
      <Testimonial />
      <Pricing />
    </>
  )
}
