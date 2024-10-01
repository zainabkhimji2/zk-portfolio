import {  Frontend_skill, } from "../../../../constants"
import SkillsDataprovider from "../sub/skillsDataprovider"
import Skilltext from "../sub/Skilltext"


function Skills() {
  return (
    <>
    <section 
    id="skills"
    className="flex flex-col items-center justify-center gap-3 h-full overflow-hidden pb-80 py-20"
    style={{transform:"scale(0.9)"}}
    >
      <Skilltext/>
      
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image,index)=>(
          <SkillsDataprovider 
          key={index}
          src={image.Image}
          width={image.width}
          height={image.height}
          index={index} 
          />
        ))}

      </div>
    
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
          className="w-full h-auto"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/cards-video.webm"
          />

        </div>

      </div>

    </section>
    </>
  )
}

export default Skills