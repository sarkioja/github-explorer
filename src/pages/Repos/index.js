import React from 'react'
import { useParams } from "react-router-dom";

import * as S from './styled'

function Repos() {
  const { userID } = useParams();
  return (
    <S.Test>
      <h1> Repos {userID} </h1>
    </S.Test>

  )
}

export default Repos