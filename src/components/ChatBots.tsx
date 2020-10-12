import React, { } from 'react'
import { Menu, Typography } from 'antd'
import { BookOutlined, MedicineBoxOutlined, SmileOutlined } from '@ant-design/icons'
import { PersonalitySummary } from './Bots/PersonalitySummary/PersonalitySummary'
import { HealthSteps } from './Bots/HealthSummary/HealthSteps';
const { Title } = Typography
interface Props { HandelChangeSteps: (NewSteps: any[]) => void, loading: boolean }


const ChatBots: React.FunctionComponent<Props> = ({ HandelChangeSteps, loading }: Props) => {
    const textColor = { color: "#fff" }
    return (

        <Menu style={{ height: "100%", paddingTop: "1.2em" }} mode="inline" defaultSelectedKeys={['1']} theme="dark"
        >
            <Menu.Item disabled>
                <Title level={3} style={{ ...textColor }}>Choose Bot</Title>
            </Menu.Item>
            <Menu.Item key="1" icon={<SmileOutlined />} onClick={() => { HandelChangeSteps(PersonalitySummary) }
            } disabled={loading}>
                Summary About You
                            </Menu.Item>
            <Menu.Item key="2" icon={<MedicineBoxOutlined />} onClick={() => {
                HandelChangeSteps(HealthSteps)
            }} disabled={loading}>
                Your Health State
            </Menu.Item>
            <Menu.Item key="3" icon={<BookOutlined />} onClick={() => {
                HandelChangeSteps(HealthSteps)
            }} disabled={loading}>
                Find book You need
            </Menu.Item>
        </Menu >
    )
}

export default ChatBots
