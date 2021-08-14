import { useState } from 'react'

import { List } from './List.js'
import { Form } from './Form.js'
import { withLoading } from './hoc/WithLoading.js'
import { getFruits } from './fruits.js'
import { Header } from './components/header.js'

function App({ data }) {
  const [tab, setTab] = useState('list')
  const [fruits, setFruits] = useState(data)

  const addFruits = (fruit) => {
    setFruits([...fruits, fruit])
    setTab('list')
  }

  return (
    <div>
      <Header tab={ tab } setTab={ setTab } />
      { tab === 'list' ? <List fruits={fruits} /> : <Form onAddFruits={addFruits} /> }
    </div>
  )
}

export default withLoading(App, getFruits);
