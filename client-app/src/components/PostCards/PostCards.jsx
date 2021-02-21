import React, { Component } from 'react';
import './PostCards.css'
import PostCard from '../PostCard/PostCard'
import { getPosts } from '../../services/post'

class PostCards extends Component {
  constructor() {
    super() 
      this.state = {
        posts: []
      }
  }

  async componentDidMount() {
    const posts = await getPosts()
    this.setState({ posts })
  }

  render() {

    const POSTS = this.state.posts.reverse().map((post, index) =>
      index < 8 ? <PostCard _id={post._id} name={post.name} imgURL={post.imgURL} key={index} /> : null
    )

    return (
      <div className="post-cards">
        <div className="latest">Latest Posts!</div>
        <div className="cards">
          {POSTS}
        </div>
      </div>
    );
  }
}

export default PostCards;