import React, { useState, useEffect, Fragment, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary'
import { useParams } from "react-router-dom";

import ErrorFallback from 'components/ErrorFallback'
import Header from 'components/Header'
import UserInfo from 'components/UserInfo'
import Repos from 'components/Repos'
import Starred from 'components/Starred'

import { getUser } from 'services/User'

import * as S from './styled'

function Profile () {  
  const { userID } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getUser(userID)
      console.log(data)
      setUser(data);
    }

    fetchData();
 
  }, []);

  return (
    <Fragment>

      <Header />
      <ErrorBoundary FallbackComponent={ ErrorFallback }>
        <UserInfo data={ user } />

        <Suspense fallback={<p>Loading Data...</p>}>
          <Repos url={ user.login } />
          <Starred url={ user.login } />  
        </Suspense>

      </ErrorBoundary>


    </Fragment>
  )
}

export default Profile
