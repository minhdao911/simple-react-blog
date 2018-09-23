import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { showPost, deletePost } from "../actions";

class PostsShow extends Component {
  componentDidMount() {
    this.props.showPost(this.props.match.params.id);
  }

  onDeleteClick = e => {
    e.preventDefault();
    this.props.deletePost(this.props.match.params.id, () => {
      this.props.history.push("/");
    });
  };

  render() {
    const { post } = this.props;
    if (!post) return <div>Loading...</div>;
    return (
      <div className="container">
        <Link to="/">Back To Index</Link>{" "}
        <a href="" onClick={this.onDeleteClick}>
          Delete
        </a>
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
  { showPost, deletePost }
)(PostsShow);
