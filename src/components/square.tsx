import { v4 as uuidv4 } from 'uuid'
import ISquare, { ISquareComponent } from './@types/square'
import { H3, H4, P } from './typography'

export default function Square({ type, content } : ISquare){

  return(

    <div className={`
      grid
      ${content.length < 4 ? 'grid-flow-col auto-cols-fr' : 'grid-cols-4'}
      md:grid-flow-row
      md:auto-rows-fr
      gap-5
      justify-center
    `}>

      {

        (() => {

          switch (type) {
          case 'SquareImage':
            return content.map((square) => <SquareWithImage 
              key={uuidv4()}
              image={square.image}
              title={square.title}
              desc={square.desc}
            />)
          case 'SquareWithoutImage':
            return content.map((square) => <SquareWithoutImage 
              key={uuidv4()}
              hashtag={square.hashtag}
              title={square.title}
              desc={square.desc}
            />)
          case 'SquareText':
            return content.map((square) => <SquareText 
              key={uuidv4()}
              title={square.title}
              desc={square.desc}
            />)
          default:
            return
          }

        })()

      }

    </div>

  )

}

export function SquareWithImage({ image, title, desc } : ISquareComponent){

  return(

    <div className='
      flex
      flex-col
    '>

      <div className='h-14' />

      <div className='
        relative
        flex
        flex-col
        gap-5
        py-20
        px-5
        bg-white
        border
        border-solid
        border-[#00000033]
        rounded-3xl
        shadow-xl
        shadow-[#00000029]
      '>
      
        <div className='
          absolute
          -top-14
          left-1/2
          -translate-x-1/2
          w-28
          h-28
          rounded-full
          bg-white
          border
          border-solid
          border-[#7F8084]
          bg-center
          bg-cover
        ' style={{ backgroundImage: `url(${image})` }} />

        <H4 
          $color='#7F8084'
          $align='center'
          $bold={600}
          dangerouslySetInnerHTML={{__html: title}} />
      
        <P 
          $color='#7F8084'
          $align='center'
          dangerouslySetInnerHTML={{__html: desc}} />

      </div>

    </div>

  )

}

export function SquareWithoutImage({ title, desc } : ISquareComponent){

  return(

    <div className='
      flex
      flex-col
      p-5
      gap-6
      rounded-3xl
      border
      border-solid
      border-[#00000033]
    '>

      <div className='
        aspect-video
        bg-[#CBCBCB]
      ' />

      <P 
        $color='#262625'
        $bold={700}
        $uppercase
        $align='left'
        dangerouslySetInnerHTML={{__html: title}} />

      <P 
        $color='#7F8084'
        $align='left'
        dangerouslySetInnerHTML={{__html: desc}} />

    </div>

  )

}

export function SquareText({ title, desc } : ISquareComponent){

  return(

    <div className='
      flex
      flex-col
      gap-5
    '>

      <H3 
        $color='white'
        dangerouslySetInnerHTML={{__html: title}} />

      <P
        $color='#7F8084'
        dangerouslySetInnerHTML={{__html: desc}} />

    </div>

  )

}