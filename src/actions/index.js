import axios from 'axios';

export const FETCHING_CHARACTERS = "fetching_characters";
export const FETCHING_CHARACTERS_SUCCESS = "fetching_characters_success";
export const FETCHING_CHARACTERS_FAILURE = "fetching_characters_failure";

export const getCharacters = () => (dispatch) => {
  dispatch({ type: FETCHING_CHARACTERS });

  const request = axios.get(`https://swapi.co/api/people/`);

  request.then(({ data }) => {
    console.log('Response::', data);
    dispatch({type: FETCHING_CHARACTERS_SUCCESS, payload: data.results});
  })
  .catch(err => {
    dispatch({type: FETCHING_CHARACTERS_FAILURE, error: err});
  });
};
