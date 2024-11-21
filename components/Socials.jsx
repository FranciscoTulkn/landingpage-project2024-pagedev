'use client';

import { 
  RiGithubFill, 
  RiLinkedinFill, 
  RiInstagramFill, 
  RiTwitterXFill 
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: '/',
    name: <RiGithubFill />,
  },
  {
    path: '/',
    name: <RiLinkedinFill />,
  },
  {
    path: '/',
    name: <RiInstagramFill />,
  },
  {
    path: '/',
    name: <RiTwitterXFill />,
  },
]

const Socials = ({ containerStyle, iconsStyles }) => {
  return <div className={`${containerStyle}`}>
    {icons.map((icon, index) => {
      return (
        <Link 
          href={icon.path} 
          key={index} 
          className={`${iconsStyles}`}
        >
          {icon.name}
        </Link>
      );
    })}
  </div>
};

export default Socials;
