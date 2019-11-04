import axios from "axios"
import { useState, useEffect } from "react"

export const UserPost = async (url, token, body) => {
  if (!token) {
    try {
      return await axios.post(url, body)
    } catch (error) {
      return error
    }
  }

  const userInstance = axios.create({
    timeout: 2000,
    headers: { Authorization: `Bearer ${token}` },
  })

  try {
    return await userInstance.post(url, body)
  } catch (error) {
    return error
  }
}

export const UserGet = async (url, token, body) => {
  const userInstance = axios.create({
    timeout: 2000,
    headers: { Authorization: `Bearer ${token}` },
  })

  try {
    return await userInstance.get(url, body)
  } catch (error) {
    return error
  }
}

export const useFetch = (method, url, token, body) => {
  const [res, setRes] = useState(null)

  useEffect(() => {
    const postRes = async () => {
      let parsedBody = null
      if (body) parsedBody = JSON.parse(body)
      const response = await UserPost(url, token, parsedBody)
      setRes(response)
    }
    const getRes = async () => {
      let parsedBody = null
      if (body) parsedBody = JSON.parse(body)
      const response = await UserGet(url, token, parsedBody)
      setRes(response)
    }

    if (method === "post") {
      postRes()
    } else {
      getRes()
    }
  }, [body, method, token, url])

  return res
}
