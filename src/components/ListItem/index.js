import React, { Fragment } from 'react'

import * as S from './styled'
 
function ListItem(props) {

  const {title, description, date, language, stars, forks, url, avatar } = props

  return (
    <S.Item>
      { avatar ? (
        <S.Flex>
          <S.Link to={url} title={description}> 
            <S.Avatar src={avatar} />
          </S.Link>

          <S.DumbDiv>
          <S.Title>
              <S.Link to={url} title={description}> 
                { title } 
              </S.Link> 
            </S.Title>

            <S.Description>
              { description }
            </S.Description>
          </S.DumbDiv>

        </S.Flex>

      ) : (
        <Fragment>
          <S.Title>
            <S.ExternalLink href={url} title={description} target="_blank"> 
              { title } 
            </S.ExternalLink> 
          </S.Title>
          <S.Description>
            { description }
          </S.Description>
        </Fragment>
      ) }





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

      { date ? (
        <S.Text>
          { date }
        </S.Text>
      ): null }

    </S.Item>
  )
}

export default ListItem