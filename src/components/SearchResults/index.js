import React, { useContext, useEffect, Fragment} from 'react';

import * as S from './styled'

import { StateContext } from 'state/'
import { searchUser } from 'services/User'

import ListItem from 'components/ListItem';

function SearchResults() {
  const { query, search, setData, setIsLoading } = useContext(StateContext)

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        setIsLoading(true);
        const users = await searchUser(search)
        console.log(users)
        setData(users.items);
        setIsLoading(false);
      }
  
      fetchData();
    }

  }, [search]); 

  const Loading = () => {
    const { isLoading } = useContext(StateContext); 
    
    if (!isLoading) return null

    return (
      <S.Loading> 
        <S.LoadingIcon /> 
        Loading... 
      </S.Loading>
    )
  }

  const Results = () => {
    const { search, data } = useContext(StateContext); 
    
    if (!search) return null
    if (data.length == 0) {
      return (
        <S.NoResult>  No results found for {search}. </S.NoResult> 
      )
    }

    return (
          <S.List>
            { data.map((item, i) => (
              <ListItem 
                key={i} 
                avatar={item.avatar_url}
                url={item.login}
                title={item.login}
                description={item.html_url}
              />
            )) }
          </S.List>
    )
  }

  return (
    <Fragment>
      <Loading />
      <Results />
    </Fragment>
  )
}

export default SearchResults