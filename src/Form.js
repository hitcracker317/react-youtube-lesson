import { useState } from 'react'

import { Button } from './components/button'
import { TabBodyContainer } from './components/TabBodyContainer'
import { FormModal } from './components/formModal'

import styled from 'styled-components'
import { Hint } from './components/hint'

const Label = styled.label`
  display: flex;
  color: #757575;
  font-size: 14px;
  font-weight: bold;
`
const Input = styled.input`
  border-radius: 3px;
  padding: 4px 8px;
  border: 1px solid black;
`
const ButtonContainer = styled.div`
  margin-top: 24px;
`
const FormButton = styled(Button)`
  width: 120px;
`

export const Form = ({ onAddFruits }) => {
  const [text, setText] = useState('')
  const [showModal, setShowModal] = useState(false)

  const submitForm = (event) => {
    event.preventDefault()
    setShowModal(true)
  }

  return (
    <TabBodyContainer title="フルーツの追加">
      <form onSubmit={submitForm}>
        <Label>フルーツ</Label>
        <Input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <Hint />
        <ButtonContainer>
          <FormButton>追加</FormButton>
        </ButtonContainer>
      </form>
      {
        showModal &&
          <FormModal
            confirm={ () => onAddFruits(text) }
            cancel={ () => setShowModal(false) }
          />
      }
    </TabBodyContainer>
  )
}