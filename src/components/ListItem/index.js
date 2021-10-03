import React, { Fragment } from 'react'

import * as S from './styled'
 
function ListItem(props) {

  const {title, description, date, language, stars, forks, url } = props

  return (
    <S.Item>
      <S.Title>
        <S.Link href={url} title={description}> 
          { title } 
        </S.Link> 
      </S.Title>

      <S.Description>
        { description }
      </S.Description>

      { language ? (
        <S.Text> 
          <S.IconCode />
          { language } 
        </S.Text>
      ) : null}

      { stars ? (
        <S.Text> 
          <S.IconStar />
          { stars } 
        </S.Text>
      ) : null}  

      { forks ? (
        <S.Text> 
          <S.IconFork />
          { forks } 
        </S.Text>
      ) : null }  

      <S.Text>
        { date }
      </S.Text>
    </S.Item>
  )
}

export default ListItem