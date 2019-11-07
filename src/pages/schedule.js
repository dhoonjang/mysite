import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Schedule = ({ location }) => {
  const redirect_uri = location.origin

  console.log(redirect_uri)
  return (
    <Layout>
      <SEO title="Schedule" />
      <h2>Schedule</h2>
      <a
        href={`https://kauth.kakao.com/oauth/authorize?client_id=839c5882660321b55d631e0eedc8b2e3&redirect_uri=${redirect_uri}/auth&response_type=code`}
      >
        Login
      </a>
    </Layout>
  )
}

export default Schedule
