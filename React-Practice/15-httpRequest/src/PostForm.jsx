import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '', title: '', body: ''
        }
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            // in axios this.state is the data to be sent in the request body.
            // The first parameter is the URL to which the request is sent.
            // The data is the current state of the component, which contains the userId, title, and body values.
            .then(response => {
                console.log('Post submitted:', response.data);
                this.setState({ userId: '', title: '', body: '' }); // Clear form fields
            })
            .catch(error => {
                console.error('There was an error submitting the post!', error);
            });
        // Logic to handle form submission, e.g., sending data to an API
    }

    render() {
        const { userId, title, body } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name='userId' value={userId} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name='title' value={title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name='body' value={body} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm