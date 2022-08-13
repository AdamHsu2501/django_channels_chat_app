import React from "react";
import { Form, Button, Select } from "antd";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as navActions from "../store/actions/nav";
import * as messageActions from "../store/actions/message";
import * as userActions from '../store/actions/users'
import { HOST_URL } from "../settings";
const { Option } = Select;


class AddChatForm extends React.Component {
    formRef = React.createRef();
    componentDidMount() {
        console.log('componentDidMount')
        this.props.getUsers(
            this.props.username,
            this.props.token
        )
    }
    onFinish = (values) => {
        console.log(this.props, this.values)
        const combined = [values.select, this.props.username];
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`
        };
        axios
            .post(`${HOST_URL}/chat/create/`, {
                messages: [],
                participants: combined
            })
            .then(res => {
                this.props.history.push(`/${res.data.id}`);
                this.props.closeAddChatPopup();
                this.props.getUserChats(this.props.username, this.props.token);
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    error: err
                });
            });
    };

    render() {
        const users = this.props.users
        const options = users.map((user, key) =>
            <Option key={key} value={user.username}>{user.username}</Option>
        )

        return (
            <Form layout="inline" ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                <Form.Item
                    name="select"
                    label="Select"
                    rules={[
                        {
                            required: true,
                            message:
                                "Please input the username of the person you want to chat with"
                        },
                    ]}
                >
                    <Select
                        placeholder="Select a option and change input text above"
                        // onChange={this.onGenderChange}
                        allowClear
                    >
                        {options}

                    </Select>
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Start a chat
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}


const mapStateToProps = state => {
    return {
        token: state.auth.token,
        username: state.auth.username,
        users: state.user.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeAddChatPopup: () => dispatch(navActions.closeAddChatPopup()),
        getUserChats: (username, token) =>
            dispatch(messageActions.getUserChats(username, token)),
        getUsers: (username, token) =>
            dispatch(userActions.getUsers(username, token))
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AddChatForm)
);
