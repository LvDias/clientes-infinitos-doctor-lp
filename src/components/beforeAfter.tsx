import IBeforeAfter from './@types/beforeAfter'
import { H3, H4, P } from './typography'

export default function BeforeAfter({ title, left, right } : IBeforeAfter){

  return(

    <div className='
      flex
      flex-col
      gap-10
    '>

      <H3 
        $color='#7F8084'
        $align='center'
        $bold={700}
      >{title}</H3>

      <div className='
        flex
        gap-20
        items-center
        md:flex-col
      '>

        <div className='
          flex
          flex-col
          gap-5
        '>

          <H4 
            $color='#7F8084'
            $align='right'
            $bold={600}
          >{right.title}</H4>

          <P 
            $color='#7F8084'
            $align='right'
          >{right.desc}</P>

        </div>

        <div className='
          flex
          flex-col
          gap-5
        '>

          <H4 
            $color='#7F8084'
            $align='left'
            $bold={600}
          >{left.title}</H4>

          <P 
            $color='#7F8084'
            $align='left'
          >{left.desc}</P>

        </div>

      </div>

    </div>

  )

}