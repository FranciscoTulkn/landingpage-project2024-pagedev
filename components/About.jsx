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

  console.log(getData(quialificationData, 'education'))

  return  <div>
      About
    </div>

}

export default About
