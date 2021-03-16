import { Breadcrumb, Button, Col, Input, Row } from 'antd'
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { UsersAction } from '../Services/Users/users.reducer'

const BaseLayout = props => {

    const onSearch = (value) => console.log(value);

    useEffect((props) => {
        console.log(props);
        // props.dispatch(UsersAction.getUsers());

    }, []);


    return (
        <>
            <Layout>
                <Header style={{position: "fixed", zIndex:1, width:"100%" }}>
                    <div className="logo" />
                </Header>
                <Content
                    className="site-layout"
                    style={{padding:"0 50px", marginTop:64 }}
                >
                    <Breadcrumb
                        style={{ margin:"16px 0"}}
                    ></Breadcrumb>
                    <div>
                        <Row>
                            <Col span={10}>
                            <Input
                                placeholder="Search Here"
                                enterButton
                                allowClear={true}
                            >
                            </Input>
                            </Col>
                        </Row>
                    </div>

                </Content>
                <Footer style={{textAlign: "center"}}>

                </Footer>

            </Layout>

        </>
    );
}





export default connect(
    (state) => ({ state }) //mapStateToProps
)(BaseLayout);