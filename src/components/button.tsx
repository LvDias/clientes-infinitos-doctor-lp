import Link from 'next/link'

import IButton from './@types/button'
import { P } from './typography'

export function ButtonLink({ text, href, shadow, color, border } : IButton){

  return(

    <Link style={{ background: color, border: '0px', borderBottom: `1px 1px 0px solid ${border}` }} className={`
      text-white
      border
      border-solid
      border-[]
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