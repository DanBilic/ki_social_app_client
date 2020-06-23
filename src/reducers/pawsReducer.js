import { FETCH_PAWS } from "../actions/types";

export default function (state = [], action) {
  //console.log(action);

  switch (action.type) {
    case FETCH_PAWS:
      return action.payload;

    default:
      return state;
  }
}
