import React, { Fragment} from 'react';
import { ErrorBoundary } from 'react-error-boundary'

import ErrorFallback from 'components/ErrorFallback'
import Header from 'components/Header'
import SearchInput from 'components/SearchInput'
import SearchResults from 'components/SearchResults'

import * as S from './styled'

function Search () {  

  return (
    <Fragment>

      <Header />
      <ErrorBoundary FallbackComponent={ ErrorFallback }>
        <S.Container>

          <S.Main>
            <S.Title> Search Gihthub Users </S.Title>
            <SearchInput />
            <SearchResults />
          </S.Main>

        </S.Container>
      </ErrorBoundary>
    </Fragment>
  )
}

export default Search
