import { H5, P } from './typography'
import React from 'react'

import { v4 as uuidv4 } from 'uuid'

import IDropDownFaq from './@types/dropdown'
import Image from 'next/image'

export default function DropDownFaq({ list } : IDropDownFaq){

  return(

    <div className='
      flex
      flex-col
      gap-5
    '>

      {

        list.map(({ question, answer : { title, desc } }) => {

          const uuid = uuidv4()

          return(

            <div className='
              flex
              flex-col
              overflow-hidden
            ' key={uuid}>
              
              <input type='checkbox' className='hidden peer/faq' id={uuid} />
              <label className={`
                z-10
                bg-[#F0F2ED]

                peer-checked/faq:[&>div]:rounded-bl-none
                peer-checked/faq:[&>div]:rounded-br-none
                peer-checked/faq:[&>div>img]:rotate-180
              `} htmlFor={uuid}>

                <div className='
                  flex
                  justify-between
                  items-center

                  p-5
                  rounded-3xl
                  bg-gradient-to-b
                  from-[#FFFFFF]
                  to-[#F0F2ED]
                  border-2
                  border-solid
                  border-[#00000033]
                  cursor-pointer
                  hover:from-[#F0F2ED]
                  hover:to-[#FFFFFF]

                  transition-all
                  duration-300
                '>

                  <H5 
                    $color='#7F8084'
                    $bold={600}
                    $align='left'
                  >{question}</H5>

                  <Image 
                    className='
                      transition-all
                      duration-1000
                    '
                    src='/assets/icons/arrow.png'
                    width={22}
                    height={22}
                    alt='Arrow Dropdown'
                  />

                </div>

              </label>

              <div className={`
                relative
                -top-96
                p-0
                h-0
                peer-checked/faq:top-0
                peer-checked/faq:h-auto
                peer-checked/faq:p-5
                peer-checked/faq:border-t-4
                flex
                flex-col
                gap-5
                bg-white
                border-2
                border-solid
                border-t-0
                border-t-black/10
                border-[#00000033]
                rounded-bl-3xl
                rounded-br-3xl

                transition-all
                duration-1000
                overflow-hidden
              `}>

                <P 
                  $color='#262625'
                  $uppercase
                  $bold={700}
                  $align='left'
                >{title}</P>

                <P 
                  $color='#7F8084'
                  $align='left'
                >{desc}</P>

              </div>
              
            </div>

          )

        })

      }

    </div>

  )

}