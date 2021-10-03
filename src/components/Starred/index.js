import React, { useState, useEffect } from 'react'
import formatDistance from 'date-fns/formatDistance'

import ListItem from 'components/ListItem'
import LoadingIcon from 'components/LoadingIcon'

import { getStarred } from 'services/Starred'

import * as S from './styled'
 
function Starred({url}) {
  if (!url) return null

  const [starred, setStarred] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getStarred(url)

      setStarred(data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    isLoading ? 
    <LoadingIcon /> : 
    <S.List>
        {
          starred.map((star, id) => {
            const {name, description, language, stargazers_count, forks_count, owner, url, updated_at } = star          
            const date = formatDistance(new Date(updated_at), new Date(), {
              addSuffix: true
            })

            return (
              <ListItem 
                key={id} 
                url={url}
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
}

export default Starred