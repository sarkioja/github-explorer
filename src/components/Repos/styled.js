import styled from "styled-components";

import { Star } from '@styled-icons/bootstrap/Star'
import { GitRepoForked } from '@styled-icons/boxicons-regular/GitRepoForked'
import { Code } from '@styled-icons/bootstrap/Code'

export const List = styled.ul`
`

export const IconStar = styled(Star)`
  height: 0.9em;
`

export const IconFork = styled(GitRepoForked)`
  height: 0.9em;
`

export const IconCode = styled(Code)`
  height: 0.6em;
`

export const NoResult = styled.p`
  padding: 1em 2em;
`