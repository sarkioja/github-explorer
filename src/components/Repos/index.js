import React, { useState, useEffect, useContext, Fragment } from 'react'
import formatDistance from 'date-fns/formatDistance'

import ListItem from 'components/ListItem'
import LoadingIcon from 'components/LoadingIcon'

import { StateContext } from 'state/'
import { getRepos } from 'services/Repos'

import * as S from './styled'
 
function Repos({url}) {
  if (!url) return null

  const [repos, setRepos] = useState([]);
  const {isLoading, setIsLoading} = useContext(StateContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getRepos(url)

      setRepos(data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const Results = () => (
      <S.List>
      {
        repos.map((repo, id) => {
          const {name, description, language, stargazers_count, forks_count, updated_at, html_url } = repo
          const date = formatDistance(new Date(updated_at), new Date(), {
            addSuffix: true
          })

          return (
            <ListItem 
              key={id} 
              url={html_url}
              title={name}
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

export default Repos