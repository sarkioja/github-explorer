import styled from "styled-components";
import media from "styled-media-query"


export const Avatar = styled.img`
  border-radius: 50%;
  height: 5em;
  margin: 0.5em 0;
  width: 5em;

  ${media.greaterThan("medium")`
    height: 10em;
    width: 10em;
  `}
`

export const Details = styled.div`
  display: block;
  margin: 0.5em;
`

export const Title = styled.h2`
  font-weight: 600;
`

export const Description = styled.p`
  /* text-align: left; */
  color: #666;
  font-size: 0.9em;
`
