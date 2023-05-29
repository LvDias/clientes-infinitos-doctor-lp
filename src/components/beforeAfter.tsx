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
        text={title}
        color='#7F8084'
        side='center'
        bold={700}
      />

      <div className='
        flex
        gap-20
        items-center
      '>

        <div className='
          flex
          flex-col
          gap-5
        '>

          <H4 
            text={right.title}
            color='#7F8084'
            side='right'
            bold={600}
          />

          <P 
            text={right.desc}
            color='#7F8084'
            side='right'
          />

        </div>

        <div className='
          flex
          flex-col
          gap-5
        '>

          <H4 
            text={left.title}
            color='#7F8084'
            side='left'
            bold={600}
          />

          <P 
            text={left.desc}
            color='#7F8084'
            side='left'
          />

        </div>

      </div>

    </div>

  )

}