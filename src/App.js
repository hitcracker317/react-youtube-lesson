import { useState, useEffect } from 'react'
import styled from 'styled-components'

import { List } from './List.js'
import { Form } from './Form.js'
import { getFruits } from './fruits.js'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`

const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`
const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none' };
`

function App() {
  const [tab, setTab] = useState('list')
  const [fruits, setFruits] = useState([])

  useEffect(() => {
    fetchFruits()
  }, [])

  const fetchFruits = async() => {
    const fruits = await getFruits()
    setFruits(fruits)
  }

  const addFruits = (fruit) => {
    setFruits([...fruits, fruit])
    setTab('list')
  }

  return (
    <div>
      <Header>
        <HeaderUl>
          <HeaderLi focused={ tab === 'list' } onClick={()=> setTab('list')}>リスト</HeaderLi>
          <HeaderLi focused={ tab === 'form' } onClick={()=> setTab('form')}>フォーム</HeaderLi>
        </HeaderUl>
      </Header>
      { tab === 'list' ? <List fruits={fruits} /> : <Form onAddFruits={addFruits} /> }
    </div>
  )
}

export default App;
