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
        text='Segurança e conforto <br /> com menos pontos de aplicação e menos toxina'
        color='#7F8084'
        side='center'
        uppercase
        bold={500}
      />

    </div>

  )

}