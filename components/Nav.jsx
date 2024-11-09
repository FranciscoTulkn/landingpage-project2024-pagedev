// import Link of the Next.js
import Link from "next/link"

// Import hooks of the NExt.js
import { usePathname } from "next/navigation"

// Import framer motion
import { motion } from "framer-motion"

const links = [
  { path: '/', name: 'home'},
  { path: '/projects', name: 'my projects'},
  { path: '/contact', name: 'contact'},
]

const Nav =({ containerStyles, LinkStyles, underLineStyyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
        <Link 
          href={link.path} 
          key={index}
          className={`capitalize ${LinkStyles}`}
        >
          {link.path === path && (
            <motion.span 
              initial={{y: '-100%'}} 
              animate={{y: '0%'}} 
              transition={{type: 'tween'}}
              loyoutId='underline'
              className={`${underLineStyyles}`} />
          )}
          {link.name}
        </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
