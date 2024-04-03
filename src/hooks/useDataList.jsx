import { useEffect, useState } from 'react'

export const useDataList = (API_URL) => {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setUserList(data))
      .catch(error => console.log(error))
  }, [])

  return { userList }
}
