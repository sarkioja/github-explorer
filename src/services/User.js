import API from './api'

export const getUser = async (userID) => {
  try {
    const url = `/users/`
    const query = userID || 'sarkioja'
    const response = await API.get(url + query)  

    return response.data

  } catch(error) {
    console.log(`Request failed: ${error}`);
    throw new Error(error)
  }
}

