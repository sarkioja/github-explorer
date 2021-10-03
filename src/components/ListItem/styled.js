import styled from "styled-components";
import media from "styled-media-query"

import { Star } from '@styled-icons/bootstrap/Star'
import { GitRepoForked } from '@styled-icons/boxicons-regular/GitRepoForked'
import { Code } from '@styled-icons/bootstrap/Code'

export const Item = styled.li`
  border-bottom: 1.5px solid #e1e4e8;
  padding: 1.6em 2em;
  list-style-type: none;
  width: 100%;

  ${media.greaterThan("large")`
    /* margin-left: 2em; */
    padding: 2.8em 0;
    width: 100%;
  `}
`

export const Title = styled.h3`
  font-size: 1.1em;
`

export const Link = styled.a`
  /* color: #3498db; */
  color: #0969da;
  font-weight: bold;
  line-height: 1.6em;
  text-decoration: none;

  &:hover {
    /* opacity: 0.7; */
    text-decoration: underline;
    transition: text-decoration 0.25s ease-in-out;
  }

`

export const Description = styled.p`
  color: #57606a;
  line-height: 1.5em;
  margin-bottom: 0.7em;
`

export const Text = styled.span`
  margin-right: 1em;
  font-size: 0.85em;
`

export const IconStar = styled(Star)`
  height: 0.9em;
  padding: 0 0.2em 0.1em;
`

export const IconFork = styled(GitRepoForked)`
  height: 0.9em;
  padding: 0 0.2em 0.1em;
`

export const IconCode = styled(Code)`
  height: 1em;
  width: 1.5em;
`