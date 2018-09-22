import { combineReducers } from "redux";
import PostsReducer from "./reducer_posts";

const rootReducers = combineReducers({
  posts: PostsReducer
});

export default rootReducers;
