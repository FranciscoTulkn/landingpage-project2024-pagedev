import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill, 
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine
} from "react-icons/ri";

// Components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return <section className="h-[84vh] py-12 xl:py-24 xl:pt-28 bg-hero bg-no bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          
          {/* Hero Content text*/}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="mb-4 text-sm font-semibold uppercase text-primary tracking-[4px]">Web Developer</div>
            <h1 className="mb-4 h1">Hello, my name is Oscar Rios</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Brief description with insights into myself, my vocational journey, and what I engage in professionally.</p>
            
            {/* Buttons */}
            <div className="flex flex-col mx-auto mb-12 gap-y-3 md:flex-row gap-x-3 xl:mx-0">
              <Link href='/contact'>
                <Button  className='gap-x-2'>
                  Contact me 
                  <Send size={18}/>
                </Button>
              </Link>
              <Button variant='secondary' className='gap-x-2'>
                  Download CV 
                  <Download size={18}/>
              </Button>
            </div>
            
            {/* Socials */}
            <Socials 
              containerStyle='flex gap-x-6 mx-auto xl:mx-0'
              iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
            />
          </div>
          
          {/* Hero Image */}
          <div className="relative hidden xl:flex">
            
            {/* Badges to rounded the image */}
            
            {/* Badge #1 */}
            <Badge
              containerStyles='absolute top-[24%] -left-[5rem]' 
              icon={<RiBriefcase4Fill />} 
              endCountNum={3} 
              badgeText='Years Of Experience' 
            />
            {/* Badge #2 */}
            <Badge
              containerStyles='absolute top-[80%] -left-[1rem]' 
              icon={<RiTodoFill />} 
              endCountNum={6}
              endCountText='K' 
              badgeText='Finished Projects' 
            />
            {/* Badge #3 */}
            <Badge
              containerStyles='absolute top-[50%] -right-[6rem]' 
              icon={<RiTeamFill />} 
              endCountNum={12}
              endCountText='K' 
              badgeText='Hppy Clients' 
            />

            
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg 
              containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' 
              imgSrc='/hero/developer.png'
            />
          </div>
        </div>
        {/* icons  */}
        <div className="absolute hidden md:flex left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary"/>
        </div>
      </div>
    </section>
}

export default Hero
