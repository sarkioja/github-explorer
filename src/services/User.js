import API from './api'

export const getUser = async (userID) => {
  try {
    const url = `/users/`
    const query = userID
    const response = await API.get(url + query)  

    return response.data

  } catch(error) {
    console.log(`Request failed: ${error}`);
    throw new Error(error)
  }
}

export const searchUser = async (userID) => {
  try {
    const url = `/search/users`
    const query = `?q=${userID}`
    const response = await API.get(url + query)  

    return response.data

  } catch(error) {
    console.log(`Request failed: ${error}`);
    throw new Error(error)
  }
}
