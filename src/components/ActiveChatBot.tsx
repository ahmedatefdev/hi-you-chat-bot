import React, { useContext } from 'react'
// @ts-ignore: Unreachable code error
import ChatBot from 'react-simple-chatbot';
// @ts-ignore: Unreachable code error
import { ThemeProvider } from 'styled-components';
import { StepsContext } from './MainLayout';
import bot2 from '../img/icons/006-chat.svg'

const theme = {
  background: '#fff',
  // headerBgColor: '#EF7C00',
  // headerFontColor: '#fff',
  // headerFontSize: '15px',
  botBubbleColor: '#f5f8fb',
  // botFontColor: '#fffss',
  // userBubbleColor: '#2980B9',
  userBubbleColor: '#001529',
  userFontColor: '#fff'
};

interface Props {
  containerRef: HTMLDivElement | null
}
export const ActiveChatBot = ({ containerRef }: Props) => {
  const { steps } = useContext(StepsContext)
  return (
    <ThemeProvider theme={{
      ...theme, innerHeight: "100%", outerHeight: "100%"
    }}>

      <>
        <ChatBot
          enableSmoothScroll={true}
          steps={steps}
          className="test"
          style={{
            borderBottomLeftRadius
              : "0px",
            borderBottomRightRadius
              : "0px", height: "100%", borderTopLeftRadius:
              "0px",
            borderTopRightRadius: "0px"
          }}
          headerTitle="Chat Bot HiYou"
          headerComponent={<div style={{}}></div>}
          width={containerRef?.clientWidth}
          inputStyle={{
            borderBottomLeftRadius
              : "0px",
            borderBottomRightRadius
              : "0px"
          }}
          contentStyle={{
            height: "90%"

          }}
          floatingStyle={{
            borderBottomLeftRadius
              : "0px",
            borderBottomRightRadius
              : "0px",
            borderTopLeftRadius:
              "0px",
            borderTopRightRadius: "0px"

          }}
          botAvatar={bot2}
        />
      </>



    </ThemeProvider >
  )
} 