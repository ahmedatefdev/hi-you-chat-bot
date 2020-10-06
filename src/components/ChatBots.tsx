import React from 'react'
import { DatePicker, Button, version, PageHeader } from 'antd'
interface Props {

}

const ChatBots: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <div>
            <PageHeader title={version} />
            <h1> ChatBots
            </h1>
            <DatePicker />
            <Button type="primary"   >PRO</Button>
        </div>
    )
}

export default ChatBots
