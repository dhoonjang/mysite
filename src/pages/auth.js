import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Axios from "axios"

const getCode = search => new URLSearchParams(search).get("code")

const Auth = ({ location }) => {
  const code = getCode(location.search)
  const redirect_uri = location.origin + location.pathname

  useEffect(() => {
    const Login = async () => {
      try {
        const res = await Axios({
          method: "post",
          url: "https://kauth.kakao.com/oauth/token",
          params: {
            grant_type: "authorization_code",
            client_id: "839c5882660321b55d631e0eedc8b2e3",
            redirect_uri,
            code,
          },
        })

        const { access_token, refresh_token } = res.data
        localStorage.setItem("access_token", access_token)
        localStorage.setItem("refresh_token", refresh_token)

        const User = await Axios({
          method: "get",
          url: "https://kapi.kakao.com/v2/user/me",
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })

        console.log(User)
      } catch (error) {
        return error
      }
    }
    Login()
  }, [code, redirect_uri])

  return (
    <Layout>
      <SEO title="Logging" />
      <h2>Logging</h2>
    </Layout>
  )
}

export default Auth
