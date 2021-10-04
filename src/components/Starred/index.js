import React, { useState, useEffect, useContext, Fragment } from 'react'
import formatDistance from 'date-fns/formatDistance'

import ListItem from 'components/ListItem'
import LoadingIcon from 'components/LoadingIcon'

import { StateContext } from 'state/'
import { getStarred } from 'services/Starred'

import * as S from './styled'
 
function Starred({url}) {
  if (!url) return null

  const [starred, setStarred] = useState([]);
  const {isLoading, setIsLoading} = useContext(StateContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getStarred(url)

      setStarred(data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const Results = () => (
    <S.List>
      {
        starred.map((star, id) => {
          const {name, description, language, stargazers_count, forks_count, owner, html_url, updated_at } = star          
          const date = formatDistance(new Date(updated_at), new Date(), {
            addSuffix: true
          })

          return (
            <ListItem 
              key={id} 
              url={html_url}
              title={`${owner.login} / ${name}`}
              description={description}
              language={language}
              stars={stargazers_count}
              forks={forks_count}
              date={date}
            />
          )
        })
      }
    </S.List>
  )

  return (
    <Fragment>
      <LoadingIcon />
      <Results />
    </Fragment>
  )
}

export default Starred