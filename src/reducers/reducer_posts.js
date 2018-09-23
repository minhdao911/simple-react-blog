import _ from "lodash";
import { FETCH_POSTS, SHOW_POST } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    case SHOW_POST:
      const { data } = action.payload;
      return { ...state, [data.id]: data };
    default:
      return state;
  }
}
