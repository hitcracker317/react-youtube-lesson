import { useState, useContext } from 'react'
import styled from 'styled-components'

import { List } from './List.js'
import { Form } from './Form.js'
import { Header } from './components/header.js'
import { ThemeContext } from './themeContext'

const Container = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`

function App({ data }) {
  const [tab, setTab] = useState('list')
  const [fruits, setFruits] = useState(data)

  const addFruits = (fruit) => {
    setFruits([...fruits, fruit])
    setTab('list')
  }

  const [theme] = useContext(ThemeContext)

  return (
    <Container theme={theme}>
      <Header tab={ tab } setTab={ setTab } />
      { tab === 'list' ? <List fruits={fruits} /> : <Form onAddFruits={addFruits} /> }
    </Container>
  )
}

export default App
