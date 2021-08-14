import styled from "styled-components";
import { useEffect, useState, useContext } from 'react'
import { ThemeContext } from "../themeContext"

const LoadDiv = styled.div`
  height: 100%;
  padding: 36px;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`

export const withLoading = (WrappedCompoent, fetchData) => {
  return () => {
    const [data, setData] = useState(null)
    const [theme] = useContext(ThemeContext);

    useEffect(() => {
      fetch()
    }, [])

    const fetch = async() => {
      const data = await fetchData()
      setData(data)
    }

    const loading = (
      <LoadDiv theme={theme}>ロード中</LoadDiv>
    )

    return data ? <WrappedCompoent data={data} /> : loading
  }
}