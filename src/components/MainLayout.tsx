import React, { Props } from 'react';
import { Col, Layout, Menu, PageHeader, Row, } from 'antd';
import {
    WechatOutlined, MedicineBoxOutlined, BookOutlined
} from '@ant-design/icons';
import { ActiveChatBot } from './ChatBot';

const { Sider, Content, Footer } = Layout;

export default class SiderDemo extends React.Component {
    state: {
        collapsed: boolean,
        myRef: null | HTMLDivElement
    };
    myRef: React.RefObject<HTMLDivElement>;

    constructor(props: any) {
        super(props)
        this.myRef = React.createRef<HTMLDivElement>()
        this.state = {
            collapsed: false, myRef: null
        }
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
    bodyStyle = { height: "100vh", overflow: "auto" }
    render() {
        return (

            <Layout style={this.bodyStyle}>
                <Sider
                    breakpoint="lg"
                    theme="light"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}

                >
                    <div className="logo" />
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                        <PageHeader
                            className="site-page-header"
                            title="Choose Bot"
                        />
                        <Menu.Item key="1" icon={<MedicineBoxOutlined />}>
                            Your health summary
                            </Menu.Item>
                        <Menu.Item key="2" icon={<BookOutlined />}>
                            Find book to read
                            </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ backgroundColor: "white" }} >
                    <Row style={{ backgroundColor: "white" }} justify="start" align="middle">
                        {/* <Col style={{ marginLeft: "2em", textAlign: 'right' }} span={2} >
                            <div>
                                <WechatOutlined style={{ fontSize: '4em', color: '#08c' }} />
                            </div>
                        </Col> */}
                        <Col style={{ marginLeft: "2em", backgroundColor: "white", textAlign: "left" }}>
                            <PageHeader
                                className="site-page-header "
                                title="HiYou ChatBot"
                                subTitle="Created by Ahmed Atef ©2020"
                            />
                        </Col>

                    </Row>
                    <Content style={{ margin: '24px 0px 0', height: "100%" }} >
                        <div className="site-layout-background" ref={this.myRef} style={{ height: "100%", width: "100%" }} >
                            <ActiveChatBot containerRef={this.state.myRef} />
                        </div>
                    </Content>
                    {/* <Footer style={{ textAlign: 'center' }}>Created by Ahmed Atef ©2020</Footer> */}
                </Layout>
            </Layout >
        );
    }
}

