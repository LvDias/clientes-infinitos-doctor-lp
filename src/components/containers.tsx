import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (max-width: 480px){

    padding-left: 10px;
    padding-right: 10px;
    padding-top: 40px;
    padding-bottom: 40px;

  }
`

export const BContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1536px;
`

export const MContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
`

export const SContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 768px;
`

export function ContainerGradient(){

  return(

    <div className='
      absolute
      top-0
      w-full
      h-full
      grid
      grid-rows-[8]
    '>

      <div className='bg-[#FFF5F5]' />

      <div className='bg-[#FFEDED]' />

      <div className='bg-[#FFE5E5]' />

      <div className='bg-[#FFDDDD]' />

      <div className='bg-[#FFD5D5]' />

      <div className='bg-[#FFCECE]' />

      <div className='bg-[#FFC6C6]' />

      <div className='bg-[#FFBCBC]' />

    </div>

  )

}