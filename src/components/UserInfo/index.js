import React from 'react'

import * as S from './styled'
 
function UserInfo(props) {
  const {avatar_url, name, bio } = props.data;

  return (
    <S.Wrapper>
      <S.Avatar src={ avatar_url } />

      <S.Details>
        <S.Title> { name } </S.Title>
        <S.Description> { bio } </S.Description>
      </S.Details>
    </S.Wrapper>
  )
}

export default UserInfo