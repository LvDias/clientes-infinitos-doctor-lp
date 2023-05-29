import IText from './@types/typography'

export function H1({ text, color, side, bold, uppercase, shadow } : IText){

  return <h1 style={{ 
    color: color
  }} className={`
    text-4xl
  ${(() => {
    switch(side){
    case 'center':
      return 'text-center'
    case 'right':
      return 'text-right'
    case 'left':
      return 'text-left'
    }
  })()}
  ${(() => {
    switch(bold){
    case 500:
      return 'font-medium'
    case 600:
      return 'font-semibold'
    case 700:
      return 'font-bold'
    }
  })()}
    ${uppercase ? 'uppercase' : 'normal-case'}
    ${shadow ? 'drop-shadow-[1px_1px_0_#0000004D]' : 'drop-shadow-none'}
    font-montserrat
  `} dangerouslySetInnerHTML={{__html: text}} />

}

export function H2({ text, color, side, bold, uppercase, shadow } : IText){

  return <h2 style={{ 
    color: color
  }} className={`
    text-3xl
    ${(() => {
    switch(side){
    case 'center':
      return 'text-center'
    case 'right':
      return 'text-right'
    case 'left':
      return 'text-left'
    }
  })()}
    ${(() => {
    switch(bold){
    case 600:
      return 'font-semibold'
    case 700:
      return 'font-bold'
    default:
      return 'font-medium'
    }
  })()}
    ${uppercase ? 'uppercase' : 'normal-case'}
    ${shadow ? 'drop-shadow-[1px_1px_0_#0000004D]' : 'drop-shadow-none'}
    font-montserrat
  `} dangerouslySetInnerHTML={{__html: text}} />

}

export function H3({ text, color, side, bold, uppercase, shadow } : IText){

  return <h3 style={{ 
    color: color
  }} className={`
    text-2xl
    ${(() => {
    switch(side){
    case 'center':
      return 'text-center'
    case 'right':
      return 'text-right'
    case 'left':
      return 'text-left'
    }
  })()}
    ${(() => {
    switch(bold){
    case 600:
      return 'font-semibold'
    case 700:
      return 'font-bold'
    default:
      return 'font-medium'
    }
  })()}
    ${uppercase ? 'uppercase' : 'normal-case'}
    ${shadow ? 'drop-shadow-[1px_1px_0_#0000004D]' : 'drop-shadow-none'}
    font-montserrat
  `} dangerouslySetInnerHTML={{__html: text}} />

}

export function H4({ text, color, side, bold, uppercase, shadow } : IText){

  return <h4 style={{ 
    color: color
  }} className={`
    text-xl
    ${(() => {
    switch(side){
    case 'center':
      return 'text-center'
    case 'right':
      return 'text-right'
    case 'left':
      return 'text-left'
    }
  })()}
    ${(() => {
    switch(bold){
    case 600:
      return 'font-semibold'
    case 700:
      return 'font-bold'
    default:
      return 'font-medium'
    }
  })()}
    ${uppercase ? 'uppercase' : 'normal-case'}
    ${shadow ? 'drop-shadow-[1px_1px_0_#0000004D]' : 'drop-shadow-none'}
    font-montserrat
  `} dangerouslySetInnerHTML={{__html: text}} />

}

export function H5({ text, color, side, bold, uppercase, shadow } : IText){

  return <h5 style={{ 
    color: color
  }} className={`
    text-lg
    ${(() => {
    switch(side){
    case 'center':
      return 'text-center'
    case 'right':
      return 'text-right'
    case 'left':
      return 'text-left'
    }
  })()}
    ${(() => {
    switch(bold){
    case 600:
      return 'font-semibold'
    case 700:
      return 'font-bold'
    default:
      return 'font-medium'
    }
  })()}
    ${uppercase ? 'uppercase' : 'normal-case'}
    ${shadow ? 'drop-shadow-[1px_1px_0_#0000004D]' : 'drop-shadow-none'}
    font-montserrat
  `} dangerouslySetInnerHTML={{__html: text}} />

}

export function H6({ text, color, side, bold, uppercase, shadow } : IText){

  return <h6 style={{ 
    color: color
  }} className={`
    text-xs
    ${(() => {
    switch(side){
    case 'center':
      return 'text-center'
    case 'right':
      return 'text-right'
    case 'left':
      return 'text-left'
    }
  })()}
    ${(() => {
    switch(bold){
    case 600:
      return 'font-semibold'
    case 700:
      return 'font-bold'
    default:
      return 'font-medium'
    }
  })()}
    ${uppercase ? 'uppercase' : 'normal-case'}
    ${shadow ? 'drop-shadow-[1px_1px_0_#0000004D]' : 'drop-shadow-none'}
    font-montserrat
  `} dangerouslySetInnerHTML={{__html: text}} />

}

export function P({ text, color, side, bold, uppercase, shadow } : IText){

  return <p style={{ 
    color: color
  }} className={`
    text-base
    ${(() => {
    switch(side){
    case 'center':
      return 'text-center'
    case 'right':
      return 'text-right'
    case 'left':
      return 'text-left'
    }
  })()}
    ${(() => {
    switch(bold){
    case 600:
      return 'font-semibold'
    case 700:
      return 'font-bold'
    default:
      return 'font-medium'
    }
  })()}
    ${uppercase ? 'uppercase' : 'normal-case'}
    ${shadow ? 'drop-shadow-[1px_1px_0_#0000004D]' : 'drop-shadow-none'}
    font-montserrat
  `} dangerouslySetInnerHTML={{__html: text}} />

}