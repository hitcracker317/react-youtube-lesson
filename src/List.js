import { TabBodyContainer } from './components/TabBodyContainer'

import styled from 'styled-components'

const ListItem = styled.div`
  padding: 8px 16px;

  &:nth-child(n+2) {
    border-top: 1px solid #D9DBDE;
  }
`

export const List = ({ fruits }) => {

  return (
    <TabBodyContainer title="取扱いフルーツ">
      <div>
        {
          fruits.map((fruit, index) => {
            return <ListItem key={index}>{ fruit }</ListItem>
          })
        }
      </div>
      </TabBodyContainer>
  )
}