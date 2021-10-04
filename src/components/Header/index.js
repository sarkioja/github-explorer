import React from 'react'
import { useHistory } from "react-router";

import * as S from './styled'
 
function Header() {
  const history = useHistory();
  function handleClick() {
    history.push(`/`);
  }

  return (
    <S.Header>
      <S.Info onClick={ handleClick }>
        <S.Icon /> 
        <S.Title> 
          <S.Bold> Github </S.Bold> Explorer
        </S.Title>
      </S.Info>

      <S.SearchButton onClick={ handleClick }>
        <S.SearchIcon />
      </S.SearchButton>

    </S.Header>
  )
}

export default Header