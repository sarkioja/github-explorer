import styled from "styled-components";

import { Github } from '@styled-icons/bootstrap/Github'

export const Header = styled.header`
    align-items: center;
    background-color: #24292e;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    height: 3.5em;
    padding: 1em 1.2em;
`

export const Title = styled.h1`
  font-size: 1.3em;
  font-weight: 400;
  margin-left: 0.5em;
`

export const Bold = styled.span`
  font-weight: 600;
`

export const Icon = styled(Github)`
  color: #fff;
  height: 1.75em;
`