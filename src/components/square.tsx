import { v4 as uuidv4 } from 'uuid'
import ISquare, { ISquareComponent } from './@types/square'
import { H4, H6, P } from './typography'

export default function Square({ columns, type, content } : ISquare){

  return(

    <div style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }} className='
      grid
      gap-5
      justify-center
    '>

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
          text={title}
          color='#7F8084'
          side='center'
          bold={600}
        />
      
        <P 
          text={desc}
          color='#7F8084'
          side='center'
        />

      </div>

    </div>

  )

}

export function SquareWithoutImage({ hashtag, title, desc } : ISquareComponent){

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

      <H6 
        text={`#${hashtag}`}
        color='#7F8084'
        uppercase
        side='left'
      />

      <P 
        text={title}
        color='#262625'
        bold={700}
        uppercase
        side='left'
      />

      <P 
        text={desc}
        color='#7F8084'
        side='left'
      />

    </div>

  )

}