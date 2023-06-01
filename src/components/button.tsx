import Link from 'next/link'

import IButton from './@types/button'
import { P } from './typography'

export function ButtonLink({ text, href, shadow } : IButton){

  return(

    <Link className={`
      bg-[#0093FF]
      text-white
      border
      border-solid
      border-[#1DA1FF]
      py-6
      px-12
      min-w-[400px]
      rounded-full
      ${shadow ? 'shadow-[0_2px_0_#005AA7]' : 'shadow-none'}
      md:px-6
      md:min-w-[auto]
    `} href={href}>

      <P 
        $align='center'
        $shadow
      >{text}</P>

    </Link>
    
  )

}