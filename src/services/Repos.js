import API from './api'

export const getRepos = async (userID) => {
  try {
    const url = `/users/`
    const query = userID
    const endpoint = `/repos`

    const response = await API.get(url + query + endpoint)  

    return response.data

  } catch(error) {
    console.log(`Request failed: ${error}`);
    throw new Error(error)
  }
}

