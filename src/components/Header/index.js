import React from 'react'

import * as S from './styled'
 
function Header() {
  return (
    <S.Header>
      <S.Icon /> 
      <S.Title> 
        <S.Bold> Github </S.Bold>
        Explorer
      </S.Title>
    </S.Header>
  )
}

export default Header