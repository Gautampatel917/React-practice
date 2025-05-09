import React, { PureComponent } from 'react'
import axios from 'axios'

class PostList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({ posts: response.data });
                console.log(response);
            })
            .catch(error => {
                console.error('Error fetching')
            });
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                PostList
                {
                    posts.length ?
                        posts.map(post => <div key={post.key}>{post.title}</div>) : <p>NO post available</p>
                }
            </div>
        );
    }
}

export default PostList