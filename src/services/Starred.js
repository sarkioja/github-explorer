import API from './api'

export const getStarred = async (userID) => {
  if(!userID) return 

  try {
    const url = `/users/`
    const query = userID
    const endpoint = `/starred`

    const response = await API.get(url + query + endpoint)  

    return response.data

  } catch(error) {
    console.log(`Request failed: ${error}`);
    throw new Error(error)
  }
}
