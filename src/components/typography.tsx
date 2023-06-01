import styled from 'styled-components'

export const H1 = styled.h1<{$color ?: string, $align ?: string, $bold ?: number, $uppercase ?: boolean, $shadow ?: boolean}>`
  font-family: 'Montserrat';
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: ${props => props.$color};
  text-align: ${props => props.$align ? props.$align : 'left'};
  font-weight: ${props => props.$bold ? props.$bold : '500'};
  text-transform: ${props => props.$uppercase ? 'uppercase' : 'none'};
  text-shadow: ${props => props.$shadow ? '1px 1px 0px #0000004D' : 'none'};

   @media screen and (max-width: 768px) {
    text-align: center;
  }

`

export const H2 = styled.h2<{$color ?: string, $align ?: string, $bold ?: number, $uppercase ?: boolean, $shadow ?: boolean}>`
  font-family: 'Montserrat';
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: ${props => props.$color};
  text-align: ${props => props.$align ? props.$align : 'left'};
  font-weight: ${props => props.$bold ? props.$bold : '500'};
  text-transform: ${props => props.$uppercase ? 'uppercase' : 'none'};
  text-shadow: ${props => props.$shadow ? '1px 1px 0px #0000004D' : 'none'};

   @media screen and (max-width: 768px) {
    text-align: center;
  }

`

export const H3 = styled.h3<{$color ?: string, $align ?: string, $bold ?: number, $uppercase ?: boolean, $shadow ?: boolean}>`
  font-family: 'Montserrat';
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${props => props.$color};
  text-align: ${props => props.$align ? props.$align : 'left'};
  font-weight: ${props => props.$bold ? props.$bold : '500'};
  text-transform: ${props => props.$uppercase ? 'uppercase' : 'none'};
  text-shadow: ${props => props.$shadow ? '1px 1px 0px #0000004D' : 'none'};

   @media screen and (max-width: 768px) {
    text-align: center;
  }

`

export const H4 = styled.h4<{$color ?: string, $align ?: string, $bold ?: number, $uppercase ?: boolean, $shadow ?: boolean}>`
  font-family: 'Montserrat';
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: ${props => props.$color};
  text-align: ${props => props.$align ? props.$align : 'left'};
  font-weight: ${props => props.$bold ? props.$bold : '500'};
  text-transform: ${props => props.$uppercase ? 'uppercase' : 'none'};
  text-shadow: ${props => props.$shadow ? '1px 1px 0px #0000004D' : 'none'};

   @media screen and (max-width: 768px) {
    text-align: center;
  }

`

export const H5 = styled.h5<{$color ?: string, $align ?: string, $bold ?: number, $uppercase ?: boolean, $shadow ?: boolean}>`
  font-family: 'Montserrat';
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: ${props => props.$color};
  text-align: ${props => props.$align ? props.$align : 'left'};
  font-weight: ${props => props.$bold ? props.$bold : '500'};
  text-transform: ${props => props.$uppercase ? 'uppercase' : 'none'};
  text-shadow: ${props => props.$shadow ? '1px 1px 0px #0000004D' : 'none'};

   @media screen and (max-width: 768px) {
    text-align: center;
  }

`

export const H6 = styled.h6<{$color ?: string, $align ?: string, $bold ?: number, $uppercase ?: boolean, $shadow ?: boolean}>`
  font-family: 'Montserrat';
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${props => props.$color};
  text-align: ${props => props.$align ? props.$align : 'left'};
  font-weight: ${props => props.$bold ? props.$bold : '500'};
  text-transform: ${props => props.$uppercase ? 'uppercase' : 'none'};
  text-shadow: ${props => props.$shadow ? '1px 1px 0px #0000004D' : 'none'};

   @media screen and (max-width: 768px) {
    text-align: center;
  }

`

export const P = styled.p<{$color ?: string, $align ?: string, $bold ?: number, $uppercase ?: boolean, $shadow ?: boolean}>`
  font-family: 'Montserrat';
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${props => props.$color};
  text-align: ${props => props.$align ? props.$align : 'left'};
  font-weight: ${props => props.$bold ? props.$bold : '500'};
  text-transform: ${props => props.$uppercase ? 'uppercase' : 'none'};
  text-shadow: ${props => props.$shadow ? '1px 1px 0px #0000004D' : 'none'};

   @media screen and (max-width: 768px) {
    text-align: center;
  }

`