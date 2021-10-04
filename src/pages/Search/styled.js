import styled from "styled-components";
import media from "styled-media-query"


export const Container = styled.section`
  padding: 1em;

  ${media.greaterThan("medium")`
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    padding: 0 1em;
  `}
`

export const Sidebar = styled.aside`
  align-item: flex-start;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  padding: 0 0.5em;

  ${media.greaterThan("medium")`
    align-items: center;
    flex-basis: 40vw;
    flex-direction: column;
    max-width: 22em;
    justify-content: flex-start;
    padding: 0 1em;
    text-align: center;
  `}
`

export const Main = styled.main`
  display: block;
  width: calc(100vw - 2em)!important;
`

export const Title = styled.h2`

`