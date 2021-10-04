import styled from "styled-components";

import { Github } from '@styled-icons/bootstrap/Github'
import { Search } from '@styled-icons/boxicons-regular/Search'

export const Header = styled.header`
    align-items: center;
    background-color: #24292e;
    color: #fff;
    display: flex;
    justify-content: space-between;
    height: 3.5em;
    padding: 1em 1.2em;
`

export const Info = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 1.3em;
  font-weight: 400;
  margin-left: 0.5em;
`

export const Bold = styled.span`
  font-weight: 600;
`

export const SearchButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  outline: none;
`

export const Icon = styled(Github)`
  color: #fff;
  height: 1.75em;
`

export const SearchIcon = styled(Search)`
  height: 1.5em;
`