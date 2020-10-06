import React, { useContext } from 'react'
// @ts-ignore: Unreachable code error
import ChatBot from 'react-simple-chatbot';
// @ts-ignore: Unreachable code error
import { ThemeProvider } from 'styled-components';
import { widthContext } from '../App';
import personSummary from '../ChatsSteps/personSummary'

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fffss',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

interface Props {
  width: number | null | undefined
}
export const ActiveChatBot = ({ width }: Props) => {
  console.log(width);
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        width={width}
        steps={personSummary}
      />
    </ThemeProvider>
  )
}
