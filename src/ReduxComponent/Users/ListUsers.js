import { Breadcrumb, Button, Col, Input, Row } from 'antd'
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { UsersAction } from '../../Services/Users/users.reducer'
import { useDebounce } from 'use-lodash-debounce'
import { Skeleton } from 'antd';
const { Search } = Input;
const Users = ({ state, loading, dispatch }) => {

    const [query, setQuery] = useState("");
    const debouncedValue = useDebounce(query, 1000);

    const OnQueryChanged = (e) => {
        setQuery(e.target.value);
    }

    useEffect(() => {
        console.log("query", query);
        if(loading) return;
        if (!query) dispatch(UsersAction.getUsers());
        if (query)
            dispatch(UsersAction.getUsers(`?name=${query}`));
    }, [debouncedValue]);

    useEffect(() => {
        dispatch(UsersAction.getUsers());
    }, []);


    return (
        <>
            <Layout>
                <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
                    <div className="logo" />
                </Header>
                <Content
                    className="site-layout"
                    style={{ padding: "0 50px", marginTop: 64 }}
                >
                    <Breadcrumb
                        style={{ margin: "16px 0" }}
                    ></Breadcrumb>
                    <div>
                        <Row>
                            <Col span={24}>
                                <Search
                                    placeholder="Search Here"
                                    enterButton="Search"
                                    onChange={OnQueryChanged}
                                    allowClear
                                >
                                </Search>
                                <Row>
                                    {
                                        loading ?
                                            (<Skeleton active={true}></Skeleton>) :
                                            state.length ?
                                                state.map((val, index) => {
                                                    return (
                                                        <Col span={6} key={index}>
                                                            <img width={200} src={val.avatar}></img>
                                                            <h4>{val.name}</h4>
                                                        </Col>
                                                    )
                                                })
                                                :
                                                (
                                                    <h4>User Not Found</h4>
                                                )
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </div>

                </Content>
                <Footer style={{ textAlign: "center" }}>

                </Footer>

            </Layout>

        </>
    );
}

export default connect(
    (state) => ({ state: state.users, loading: state.loading }) //mapStateToProps
)(Users);