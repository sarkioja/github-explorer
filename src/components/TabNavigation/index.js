import React, { Suspense } from 'react'

const Repos = React.lazy(() => import('components/Repos'));
const Starred = React.lazy(() => import('components/Starred'));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Repos url={ url } />
        </Suspense>
      </S.Panel>

      <S.Panel>
        <Suspense fallback={<div>Loading...</div>}>
          <Starred url={ url } /> 
        </Suspense>
      </S.Panel>
    </S.Wrapper>
  )
}

export default TabNavigation