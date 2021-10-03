import React, { useState, useEffect, Suspense } from 'react'

import { getRepos } from 'services/Repos'

import * as S from './styled'
 
function Repos({url}) {
  if (!url) return null

  console.log('Called here')
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRepos(url)

      setRepos(data);
      console.log(data)
    }

    fetchData();
  }, []);

  return (
    <div>
      <h3> Repos </h3>
      <Suspense fallback={<span> Loading... </span>}>
        <span>({repos.length})</span>
      </Suspense>
    </div>

  )
}

export default Repos