import styled, { keyframes } from "styled-components";

import {Spinner3 as Spinner} from '@styled-icons/evil/Spinner3'

export const Loading = styled.div`
  height: 80vh;
  margin: 2em 0;
  /* margin: 0 auto;
  text-align: center; */
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoadingIcon = styled(Spinner)`
  animation: 0.7s linear ${spin} infinite;   
  color: black;
  height: 2em;
`