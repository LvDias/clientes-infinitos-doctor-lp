import Image from 'next/image'

import { H6 } from '../typography'

interface ITextSecurity {
  color : string
  shield ?: boolean
}

export default function TextSecutiry({ color, shield } : ITextSecurity){
  
  return(

    <div className='
      flex
      flex-col
      items-center
      gap-5
    '>

      {

        shield ? <Image src='/assets/icons/shield.png' width={28} height={34} alt='Security' /> : <Image className='hidden' src='/assets/icons/shield.png' width={28} height={34} alt='Security' />

      }

      <H6 
        $color={color}
        $align='center'
        $uppercase
        $bold={500}
      >
        Segurança e conforto <br /> com menos pontos de aplicação e menos toxina
      </H6>

    </div>

  )

}