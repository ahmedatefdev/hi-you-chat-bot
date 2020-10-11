import React, { createContext } from 'react'
import { Menu, Typography } from 'antd'
import { BookOutlined, MedicineBoxOutlined, SmileOutlined } from '@ant-design/icons'
import { PersonalitySummary, optionsSteps, } from './Bots/PersonalitySummary/PersonalitySummary'
const { Title } = Typography
interface Props { HandelChangeSteps: (NewSteps: any[]) => void }


const ChatBots: React.FunctionComponent<Props> = ({ HandelChangeSteps }: Props) => {
    const textColor = { color: "#fff" }
    return (
        <Menu style={{ height: "100%", paddingTop: "1.2em" }} mode="inline" defaultSelectedKeys={['1']} theme="dark"
        >
            <Menu.Item>
                <Title level={3} style={{ ...textColor }}>Choose Bot</Title>
            </Menu.Item>
            <Menu.Item key="1" icon={<SmileOutlined />} onClick={() => {
                HandelChangeSteps(PersonalitySummary)
            }
            }>
                Summary About You
                            </Menu.Item>
            <Menu.Item key="2" icon={<MedicineBoxOutlined />} onClick={() => {
                HandelChangeSteps(optionsSteps)
            }}>
                Your Health State
                            </Menu.Item>
            <Menu.Item key="3" icon={<BookOutlined />}>
                Find book You need
                            </Menu.Item>
        </Menu>
    )
}

export default ChatBots
