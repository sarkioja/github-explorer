import React, { Fragment } from 'react'

import * as S from './styled'
 
function UserInfo(props) {
  const {avatar_url, name, bio } = props.data;

  return (
    <Fragment>
      <S.Avatar src={ avatar_url } />

      <S.Details>
        <S.Title> { name } </S.Title>
        <S.Description> { bio } </S.Description>
      </S.Details>
    </Fragment>
  )
}

export default UserInfo