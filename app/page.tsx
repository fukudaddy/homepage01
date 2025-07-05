import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import LatestWorks from '@/components/sections/LatestWorks'
import LatestBlog from '@/components/sections/LatestBlog'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <LatestWorks />
      <LatestBlog />
      <Contact />
    </>
  )
}