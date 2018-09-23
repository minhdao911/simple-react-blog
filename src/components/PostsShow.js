import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { showPost } from "../actions";

class PostsShow extends Component {
  componentDidMount() {
    this.props.showPost(this.props.match.params.id);
  }

  render() {
    const { post } = this.props;
    if (!post) return <div>Loading...</div>;
    return (
      <div className="container">
        <Link to="/">Back To Index</Link>
        <h3>{post.title}</h3>
        <h6>
          <em>{post.categories}</em>
        </h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { showPost }
)(PostsShow);
