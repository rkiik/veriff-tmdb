import {
  SET_FAVORITE_MOVIE,
  SET_VERIFIED_ADULT_STATUS
} from "./actions";

interface AppState {
  favouriteMovies: string[];
  verifiedAdult: boolean;
}

const initialState: AppState = {
  favouriteMovies: [],
  verifiedAdult: false
}

export function appReducer(state: AppState = initialState, action: any) {
  switch (action.type) {
    case SET_FAVORITE_MOVIE:
      return {
        ...state,
        favouriteMovies: [...state.favouriteMovies, action.movieID]
      } as AppState;
    case SET_VERIFIED_ADULT_STATUS:
      return {
        ...state,
        verifiedAdult: action.status
      } as AppState
    default:
      return state;
  }
}
