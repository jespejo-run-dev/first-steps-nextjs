'use client'

import Link from "next/link"
import style from './ActiveLink.module.css'
import { usePathname } from "next/navigation"

interface Props {
  path: string
  text: string
}

export const ActiveLink = ({path, text}: Props) => {

  const pathName = usePathname()
  const isActive = pathName === path
  
  return (
    <Link 
      className={`${style.link} ${isActive && style['active-link']}`} 
      href={path}>
      {text}
    </Link>
  )
}
