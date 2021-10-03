import styled from 'styled-components'
import media from "styled-media-query"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const Wrapper = styled(Tabs)`

`

export const List = styled(TabList)`
  /* ul */
  align-items: center;
  border-bottom: 1px solid #e1e4e8;
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  list-style-type: none;

  [aria-selected='true'] {
    border-bottom: 0.3em solid #e36209;
    font-weight: bold;
  }
`

export const Item = styled(Tab)`
  /*  li */
  font-size: 1.1em;
  padding: 1em 1.5em;
  text-align: center;
  width: 50%;

  ${media.greaterThan("medium")`
    padding: 1em 2em;
    width: 12em;
  `}
`

export const Panel = styled(TabPanel)`

`