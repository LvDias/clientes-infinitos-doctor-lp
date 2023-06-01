import Image from 'next/image'

import { H6 } from '../typography'

export default function TextSecutiry(){
  
  return(

    <div className='
      flex
      flex-col
      items-center
      gap-5
    '>

      <Image src='/assets/icons/shield.png' width={28} height={34} alt='Security' />

      <H6 
        $color='#7F8084'
        $align='center'
        $uppercase
        $bold={500}
      >
        Segurança e conforto <br /> com menos pontos de aplicação e menos toxina
      </H6>

    </div>

  )

}