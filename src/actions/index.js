import axios from "axios";
import { FETCH_USER, FETCH_PAWS, CREATE_PAW } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/v1/auth/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPaws = () => async (dispatch) => {
  const res = await axios.get("/api/v1/paws");

  dispatch({ type: FETCH_PAWS, payload: res.data.data });
};

export const createPaw = (recipeValues, history) => async (dispatch) => {
  const res = await axios.post("/api/v1/paws", recipeValues);
  history.push("/paws");
  dispatch({ type: CREATE_PAW, payload: res.data.data });
};
