export const SET_FAVORITE_MOVIE = 'SET_FAVORITE_MOVIE';
export const SET_VERIFIED_ADULT_STATUS = 'SET_VERIFIED_ADULT_STATUS';

export const setFavouriteMovie = (movieID: string) => (dispatch: any, getState: any) => {
  dispatch({
    type: SET_FAVORITE_MOVIE,
    movieID
  });
};

export const setVerifiedAdultStatus = (status: boolean) => (dispatch: any, getState: any) => {
  dispatch({
    type: SET_VERIFIED_ADULT_STATUS,
    status
  });
};
