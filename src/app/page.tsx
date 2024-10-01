import Encryption from "./components/main/Encryption"
import Hero from "./components/main/hero"
import Skills from "./components/main/Skills"
import About from "./components/main/about"

function Home() {
  return (
    <>
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 ">
      <Hero />
      <Skills/>
      <Encryption/>
<About/>
    
      </div>

    </main>
    </>
  )
}

export default Home