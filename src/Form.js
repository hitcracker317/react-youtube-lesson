import { useState } from 'react'

import { Button } from './components/button'
import { TabBodyContainer } from './components/TabBodyContainer'

import styled from 'styled-components'

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
  width: 120px;widthwidthwidthwidth
`

export const Form = ({ onAddFruits }) => {
  const [text, setText] = useState('')

  const submitForm = (event) => {
    event.preventDefault()
    onAddFruits(text)
  }

  return (
    <TabBodyContainer title="フルーツの追加">
      <form onSubmit={submitForm}>
        <Label>フルーツ</Label>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <ButtonContainer>
          <FormButton>追加</FormButton>
        </ButtonContainer>
      </form>
    </TabBodyContainer>
  )
}