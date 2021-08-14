import styled from "styled-components";
import { useEffect, useState } from 'react'

const LoadDiv = styled.div`
  padding: 36px;
`

export const withLoading = (WrappedCompoent, fetchData) => {
  return () => {
    const [data, setData] = useState(null)

    useEffect(() => {
      fetch()
    }, [])

    const fetch = async() => {
      const data = await fetchData()
      setData(data)
    }

    const loading = (
      <LoadDiv>ロード中</LoadDiv>
    )

    return data ? <WrappedCompoent data={data} /> : loading
  }
}