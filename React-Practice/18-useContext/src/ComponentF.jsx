import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
    static propTypes = {}

    render() {
        return (
            <UserConsumer>
                {
                   /*  ({ user }) => {
                        return <h1>Hello, {user.name}</h1>
                    } */
                    username => {
                        return <h1>Hello, {username}</h1>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF
