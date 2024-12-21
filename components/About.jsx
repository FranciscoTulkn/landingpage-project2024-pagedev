import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, BriefCase } from 'lucide-react'

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Oscar Rios',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'rios-oscar@gmail.com',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Dg 161 #1-25 Bogotá, Colombia',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '3214568979',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Software Enggineer ',
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born on 15 May 1997',
  },
  
];

const quialificationData = [
  {
    title: 'education',
    data: [
      {
        university: "Institución Universitaria Politecnico Grancolombiano",
        quialification: 'Bachelor in Software Engineering',
        year: '2011 - 2015'
      },
      {
        university: "Universidad de los Andes",
        quialification: 'Specialist in Software Engineering',
        year: '2022 - 2024'
      },

    ]
  },
  {
    title: 'experience',
    data: [
      {
        company: "SoftKa",
        quialification: 'Junior Software Developer',
        year: '2015 - 2018'
      },
      {
        company: "Adaggio",
        quialification: 'Junior DataAnalyst',
        year: '2018 - 2022'
      },
      {
        company: "Adaggio",
        quialification: 'Asistenst of Data and DevOps',
        year: '2023 - Present'
      },
      

    ]
  }
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'JavaScript',
      },
      {
        name: 'React',
      },
      {
        name: 'Next.js',
      },
      {
        name: 'Python',
      },
      {
        name: 'Backend Developer',
      },
    ]
  },
  {
    title: 'Tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/figma.svg',
      },      
    ]
  },
];

const About = () => {

  const getData = (arr, title ) => {
    return arr.find((item) => item.title === title)  
  };

  return  <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="mx-auto text-center section-title mb_8 xl:mb-16">About me</h2>
        <div className="flex flex-col xl:flex-row">
          {/* {image} */}
          <div className="relative flex-1 hidden xl:flex">
            <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/developer.png' />
          </div>
          {/* tabs */}
          <div className="flex-1 p-2 rounded-none">
            <Tabs defaultValue="personal">
              <TabsList>
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualification">Qualification</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              {/* Tabs content */}
              <div className="mt-12 text-lg xl:mt-8">
                {/* Personal */}
                <TabsContent value="personal">personal info</TabsContent>
                <TabsContent value="qualification">quialification info</TabsContent>
                <TabsContent value="skills">skills info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>

}

export default About
