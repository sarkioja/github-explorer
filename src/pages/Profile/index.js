import React, { useState, useEffect, Fragment, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary'
import { useParams } from "react-router-dom";

import ErrorFallback from 'components/ErrorFallback'
import Header from 'components/Header'
import UserInfo from 'components/UserInfo'
import TabNavigation from 'components/TabNavigation'

import { getUser } from 'services/User'

import * as S from './styled'

function Profile () {  
  const { userID } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getUser(userID)
      setUser(data);
    }
    fetchData();
  }, []);

  return (
    <Fragment>

      <Header />
      <ErrorBoundary FallbackComponent={ ErrorFallback }>
        <S.Container>
          <S.Sidebar>
            <UserInfo data={ user } />
          </S.Sidebar>

          <S.Main>
            <TabNavigation url={ user.login } />
          </S.Main>

        </S.Container>
      </ErrorBoundary>
    </Fragment>
  )
}

export default Profile
