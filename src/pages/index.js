import React, { useEffect, useState } from "react"
import "../styles/index.scss"

import Layout from "../components/Layout/Layout"
import Banner from "../components/Banner/Banner"
import ProgressBar from "../components/ProgressBar/ProgressBar"

const initialState = {
  firstName: null,
  walletValue: 0,
  walletTarget: 0,
}

const IndexPage = () => {
  const [user, setUser] = useState(initialState)

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(
        "https://f7d67658-88ff-41a7-bed1-75fdb8bd0797.mock.pstmn.io/user/profile?example=success"
        // "https://f7d67658-88ff-41a7-bed1-75fdb8bd0797.mock.pstmn.io/user/profile?example=error"
      )
      const data = await res.json()
      setUser({ ...initialState, ...data })
    }
    fetchUser()
  }, [])

  return (
    <Layout>
      <Banner firstName={user.firstName} />
      <ProgressBar value={user.walletValue} target={user.walletTarget} />
    </Layout>
  )
}

export default IndexPage
