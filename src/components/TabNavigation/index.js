import React, { Suspense } from 'react'

const Repos = React.lazy(() => import('components/Repos'));
const Starred = React.lazy(() => import('components/Starred'));
import LoadingIcon from 'components/LoadingIcon'

import * as S from './styled'

function TabNavigation(props) {
  const { url } = props;

  return (
    <S.Wrapper>
      <S.List>
        <S.Item> Repos </S.Item>
        <S.Item> Starred </S.Item>
      </S.List>

      <S.Panel>
        <Suspense fallback={<LoadingIcon />}>
          <Repos url={ url } />
        </Suspense>
      </S.Panel>

      <S.Panel>
        <Suspense fallback={<LoadingIcon />}>
          <Starred url={ url } /> 
        </Suspense>
      </S.Panel>
    </S.Wrapper>
  )
}

export default TabNavigation