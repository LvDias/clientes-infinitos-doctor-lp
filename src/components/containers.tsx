'use client'

import styled from 'styled-components'

export const Container = styled.section`
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
  width: 100%;
  max-width: 1536px;
`

export const MContainer = styled.div`
  width: 100%;
  max-width: 1280px;
`

export const SContainer = styled.div`
  width: 100%;
  max-width: 768px;
`