import React, { useContext } from 'react'

import { StateContext } from 'state/'

import * as S from './styled'

const LoadingIcon = () => {    
  const { isLoading } = useContext(StateContext); 
    
  if (!isLoading) return null
  
  return (
    <S.Loading> 
      <S.LoadingIcon /> 
      Loading... 
    </S.Loading>
  )
}

export default LoadingIcon