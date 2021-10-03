import React, { useState, useEffect } from 'react'

import { getStarred } from 'services/Starred'

import * as S from './styled'
 
function Starred({url}) {
  if (!url) return null
  console.log(url)
  
  const [starred, setStarred] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStarred(url)
      
      console.log(data)

      if(url) return setStarred(data);
    }

    fetchData();
  }, []);

  return (
    <p> Starred ({starred.length}) </p>
  )
}

export default Starred