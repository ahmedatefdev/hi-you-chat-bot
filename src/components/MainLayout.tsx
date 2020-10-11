import React, { createContext } from 'react';
import { Col, Layout, PageHeader, Row, Spin } from 'antd';
import { ActiveChatBot } from './ActiveChatBot';
import ChatBots from './ChatBots';
import { PersonalitySummary } from './Bots/PersonalitySummary/PersonalitySummary';

const { Sider, Content } = Layout;
export const StepsContext = createContext({ steps: PersonalitySummary });
export default class SiderDemo extends React.Component {
    state: {
        collapsed: boolean,
        myRef: null | HTMLDivElement,
        steps: any
        reload: boolean
    };
    myRef: React.RefObject<HTMLDivElement>;

    constructor(props: any) {
        super(props)
        this.myRef = React.createRef<HTMLDivElement>()
        this.state = {
            collapsed: false, myRef: null, steps: PersonalitySummary
            , reload: false
        }
        this.HandelChangeSteps = this.HandelChangeSteps.bind(this)

    }
    toggle = () => {
        this.setState({
            ...this.state,
            collapsed: !this.state.collapsed,
        });
    };
    componentDidMount() {
        this.setState({
            ...this.state,
            myRef: this.myRef.current,
        });
    }
    HandelChangeSteps(NewSteps: any[]) {
        if (this.state.reload) return
        this.setState({ ...this.state, reload: true, })
        setTimeout(() => {
            this.setState({ ...this.state, reload: false, steps: NewSteps })
        }, 1000);
    }
    bodyStyle = { height: "100vh", overflow: "auto" }
    backgroundColor = { backgroundColor: "#00796b" }
    textColor = { color: "#fff" }
    render() {
        return (

            <StepsContext.Provider value={{ steps: this.state.steps }}>
                <Layout style={this.bodyStyle}>
                    <Sider
                        breakpoint="xs"
                        theme="dark"
                        style={{ ...this.backgroundColor }}
                        collapsedWidth="0"
                    >
                        <div className="logo" />
                        <ChatBots HandelChangeSteps={this.HandelChangeSteps} />
                    </Sider>
                    <Layout style={{ backgroundColor: "white" }} >
                        <Row style={{ backgroundColor: "white" }} justify="start" align="middle">
                            <Col style={{ marginLeft: "2em", backgroundColor: "white", textAlign: "left" }}>
                                <PageHeader
                                    className="site-page-header "
                                    title="HiYou ChatBot"
                                    subTitle="Created by Ahmed Atef ©2020"
                                />
                            </Col>
                        </Row>
                        <Content style={{ margin: '24px 0px 0', height: "100%", backgroundColor: "white" }} >
                            <Spin spinning={this.state.reload} style={{ height: "100% !important", width: "100% !important" }} size="large">
                                <div className="site-layout-background" ref={this.myRef} style={{ height: "100%", width: "100%" }} >
                                    {!this.state.reload && <ActiveChatBot containerRef={this.state.myRef} />}
                                </div>
                            </Spin>
                        </Content>
                    </Layout>
                </Layout >
            </StepsContext.Provider>
        );
    }
}

